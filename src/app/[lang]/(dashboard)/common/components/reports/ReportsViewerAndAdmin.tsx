'use client';
import ReportContainCard from '@/app/components/dashboard/reports/ReportContainCard';
import React, { useContext, useEffect, useState } from 'react';

import { Button } from '@/app/components/button/Button';
import imgcatActive from '../../../../../../../public/images/Checkmark Starburst (1).svg';
import imgcatDesactive from '../../../../../../../public/images/Checkmark Starburst (1).svg';
import imgUncatDesactive from '../../../../../../../public/images/Square Dismiss.svg';
import imgUncatActive from '../../../../../../../public/images/Square Dismiss (1).svg';
import {
  reportsCardTableCategorized,
  reportsCardTableUncategorized,
} from '../../../dashboard/reports/reportsCardDatas';
import { Category } from '../report-card/reportCard.d';
import { reportType, reportType2 } from '@/utils/shared-types';
import { useAuth } from '@/app/hooks/useAuth';
import AuthService from '@/services/authService';
import axios from 'axios';
import ReportCard from '../report-card/ReportCard';
import { DecodeToken } from '../../../login/components/DecodeToken';
import { removeUserCookies, setUserCookies } from '@/cookies/cookies';
import { Spinner } from '@nextui-org/react';
import { AuthContext } from '@/app/context/AuthContext';

const ReportsViewerAndAdmin = () => {
  const { reports, setReports ,IshowHandler, isShow} = useContext(AuthContext);

  const [status, setStatut] = useState(Category.Uncategorized);
  const { user } = useAuth();
  const [token, setToken] = useState('');
  const [refresh, setRefresh] = useState(0);

  const [load, setLoad] = useState(reports.length == 0);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [reports, setReport] = useState<reportType2[]>([]);

  const getReport = async (token: string) => {
    const options = {
      method: 'GET',
      url: '/api/report',

      headers: {
        Authorization: `${token}`,
        'content-type': 'application/json',
      },
    };

    try {
      let report1: reportType2[] = [];

      await axios
        .request(options)
        .then((result) => {
          const report = result.data.filter((item: reportType) => {
            if (
              item.updatereport &&
              item.updatereport &&
              item.updatereport.status?.toLocaleLowerCase() == 'cleaned'
            ) {
              const item2 = { ...item };
              delete item.updatereport;
              report1.push({
                ...item,
                status2:
                  item2.updatereport && item2.updatereport.status
                    ? item2.updatereport.status
                    : 'pending',
                description2:
                  item2.updatereport && item2.updatereport.description
                    ? item2.updatereport.description
                    : undefined,
                category2:
                  item2.updatereport && item2.updatereport.category
                    ? [...item2.updatereport.category]
                    : [],
              });
            }
          });

          setReports(report1.reverse());
          setLoad(false);
          setError(false);
            setTimeout(async () => {
              setRefresh((preview) => preview + 1);
            }, 20000);
        })
        .catch((error) => {
          console.log(error);
          setLoad(false);
          setError(true);
        });
    } catch (error) {}
  };
  useEffect(() => {
    isShow && IshowHandler();

    const response = new AuthService()
      .refreshToken()
      .then(async (result) => {
        if (result.status === 201) {
          const user = DecodeToken(result.headers.authorization);
          await getReport(result.headers.authorization);

          setToken(result.headers.authorization);

          user.then((result1) => {
            if (typeof result1 == 'object') {
              setUserCookies({
                ...result1,
                token: result.headers.authorization,
              });
              setError(false);
              setRefresh(1);
            }
          });
        }
      })
      .catch((error) => {
        setLoad(false);
        setErrorMessage(error.response.data.message);
        setError(true);

        if (typeof error.response.data.message == 'string') {
          if (error.response.data.message !== 'Too Many Requests.') {
            removeUserCookies();
            setReports([]);

            window.location.href = '/en/login';
          }
        }
      });
  }, []);

  useEffect(() => {
    //  let value=0
    if (refresh > 2) {
      getReport(token);
    }

    if (refresh > 0) {
      // setTimeout(async () => {
      //   setRefresh((preview) => preview + 1);
      // }, 20000);
    }
  }, [refresh]);
  return (
    <div className="w-full relative  h-fit">
      <h1 className="text-2xl font-bold sm:my-8">All reports</h1>
      <h2 className="font-bold  opacity-80">{`${status} Data`}</h2>
      <p className="text-sm opacity-70">Click to view data details</p>
      <div className="mt-8">
        {!load && !error && (
          <div className="flex flex-wrap gap-5 md:h-[calc(100vh-350px)] h-[calc(100vh-310px)] mb-5 overflow-y-auto overscroll-none no-scrollbar ">
            {reports.length > 0 &&
              reports.map((item, index) => {
                if (status == Category.Uncategorized) {
                  if (item.category2 && item.category2.length == 0) {
                    return (
                      <ReportCard
                        key={item._id}
                        title={item._id ? item._id : 'PT0124'}
                        date={item.updatedAt ? item.updatedAt : ''}
                        href={`/dashboard/cleaned-reports/${item._id}`}
                        reportType={Category.Uncategorized}
                      />
                    );
                  }
                } else {
                  if (item.category2 && item.category2.length > 0) {
                    return (
                      <ReportCard
                        key={item._id}
                        title={item._id ? item._id : 'PT0124'}
                        date={item.updatedAt ? item.updatedAt : ''}
                        href={
                          user && user?.role == 1
                            ? `/dashboard/cleaned-reports/${item._id}`
                            : '#'
                        }
                        reportType={Category.Categorized}
                      />
                    );
                  }
                }
              })}
          </div>
        )}
        {load && (
          <div className="text-center text-2xl md:h-[calc(100vh-350px)] h-[calc(100vh-310px)] flex place-items-center w-full justify-center">
            {/* <p>chargement patientez...</p> */}
            <Spinner label="Loading . . . " color="primary" size="lg" />
          </div>
        )}
        {error && !load && (
          <p className="flex items-center justify-center md:h-[calc(100vh-350px)] h-[calc(100vh-310px)] text-5xl ">
            {errorMessage + ' waite a few moments for retry'}
          </p>
        )}
      </div>

      <div className="flex w-fit h-16 sm:text-sm text-xs   ">
        <Button
          icon={
            status == Category.Uncategorized
              ? imgUncatActive
              : imgUncatDesactive
          }
          className={`w-auto  ${
            status == Category.Uncategorized
              ? 'bg-black rounded-xl text-white font-semibold'
              : 'text-[#828B8C]  bg-transparent'
          }`}
          onClick={() => {
            setStatut(Category.Uncategorized);
          }}
        >
          {Category.Uncategorized}
        </Button>
        <Button
          icon={status == Category.Categorized ? imgcatActive : imgcatDesactive}
          className={`w-auto ${
            status == Category.Categorized
              ? 'bg-black rounded-xl text-white font-semibold'
              : 'text-[#828B8C] bg-transparent'
          }`}
          onClick={() => {
            setStatut(Category.Categorized);
          }}
        >
          {Category.Categorized}
        </Button>
      </div>
    </div>
  );
};

export default ReportsViewerAndAdmin;
