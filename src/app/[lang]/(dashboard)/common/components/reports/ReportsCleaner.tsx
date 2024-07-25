'use client';
import ReportContainCard from '@/app/components/dashboard/reports/ReportContainCard';
import React, { useContext, useEffect, useState, Suspense } from 'react';
// import { Suspense } from 'react';
import { headers } from 'next/headers';
import { Button } from '@/app/components/button/Button';
import imgcatActive from '../../../../../../../public/images/Checkmark Starburst (1).svg';
import imgcatDesactive from '../../../../../../../public/images/Checkmark Starburst (1).svg';
import imgUncatDesactive from '../../../../../../../public/images/Square Dismiss.svg';
import imgUncatActive from '../../../../../../../public/images/Square Dismiss (1).svg';

import { Category } from '../report-card/reportCard.d';
import {
  reportsDataCleaned,
  reportsDataRaw,
} from '../../../dashboard/reports/reportsDataCleanedAndRaw';
import ReportService from '@/services/reportService';
import ReportCard from '../report-card/ReportCard';
import { reportType, reportType2 } from '@/utils/shared-types';
import Link from 'next/link';
import { UseReport } from '@/app/hooks/useReports';
import { AuthContext } from '@/app/context/AuthContext';
import { removeUserCookies, setUserCookies } from '@/cookies/cookies';
import AuthService from '@/services/authService';
import axios from 'axios';
import { useAuth } from '@/app/hooks/useAuth';
import { DecodeToken } from '../../../login/components/DecodeToken';
import { Spinner } from '@nextui-org/react';

const ReportsCleaner = () => {
  const { reports, setReports,IshowHandler , isShow} = useContext(AuthContext);

  const { user } = useAuth();

  const [refresh, setRefresh] = useState(0);

  const [status, setStatut] = useState(Category.Raw);
  // const [reports2, setReport] = useState<reportType2[]>([]);

  const [token, setToken] = useState('');
  const [load, setLoad] = useState(reports.length==0);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const ctx = useContext(AuthContext);

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
            console.log('item', item);

            if (!item.updatereport) {
              delete item.updatereport;
              report1.push({ ...item });
            } else {
              if (
                item.updatereport &&
                (item.updatereport.status?.toLocaleLowerCase() == 'pending' ||
                  item.updatereport.status?.toLocaleLowerCase() == 'cleaned' ||
                  item.updatereport.status?.toLocaleLowerCase() == 'irrelevant')
              ) {
                const item2 = { ...item };

                delete item.updatereport;
                report1.push({
                  ...item,
                  status2:
                    item2.updatereport &&
                    item2.updatereport &&
                    item2.updatereport.status
                      ? item2.updatereport.status
                      : undefined,

                  description2:
                    item2.updatereport &&
                    item2.updatereport &&
                    item2.updatereport.description
                      ? item2.updatereport.description
                      : undefined,
                  category2:
                    item2.updatereport &&
                    item2.updatereport &&
                    item2.updatereport.category
                      ? [...item2.updatereport.category]
                      : undefined,
                });
              }
            }
          });

          setReports(report1.reverse());
          setLoad(false);
          setError(false);
          // setRefresh(false)
             setTimeout(async () => {
               setRefresh((preview) => preview + 1);
             }, 20000);
        })
        .catch((error) => {
          
          setLoad(false);
          setError(true);
          setErrorMessage(error.response.data.message);
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
            setReports([])
            removeUserCookies();
            window.location.href = '/en/login';
            
          }
        }
      });
  }, []);
  useEffect(() => {
   
    if (refresh > 2) {
      getReport(token);
    }

  
  }, [refresh]);
  return (
    <div className="w-full relative  h-fit">
      <h1 className="text-2xl font-bold sm:my-8">All reports</h1>
      <h2 className="font-bold  opacity-80">{`${status} Data`}</h2>
      <p className="text-sm opacity-70">Click to view data details</p>
      <div className="mt-8">
        {!load && !error && (
          <div className="flex flex-wrap gap-5 md:h-[calc(100vh-350px)] h-[calc(100vh-310px)] mb-5 overflow-y-auto overscroll-none no-scrollbar">
           
            {reports.length > 0 &&
              reports.map((item, index) => {
                if (status == Category.Raw) {
                  if (
                    !item.status2 ||
                    (item.status2 && item.status2 == 'pending')
                  ) {
                    return (
                      <ReportCard
                        key={item._id}
                        title={item._id ? item._id : 'PT0124'}
                        date={item.createdAt ? item.createdAt : ''}
                        href={`/en/dashboard/clean-data/${item._id}`}
                        reportType={Category.Raw}
                      />
                    );
                  }
                } else {
                  if (item.status2 && item.status2 !== 'pending') {
                    return (
                      <ReportCard
                        key={item._id}
                        title={item._id ? item._id : 'PT0124'}
                        date={item.createdAt ? item.createdAt : ''}
                        href={`/en/dashboard/clean-data/${item._id}`}
                        reportType={
                          item.status2 == 'cleaned'
                            ? Category.Cleaned
                            : Category.Irrelevant
                        }
                      />
                    );
                  }
                }
              })}
          </div>
        )}
        {load && (
          <div className="text-center text-2xl md:h-[calc(100vh-350px)] sm:h-[calc(100vh-310px)] flex place-items-center w-full justify-center">
            {/* <p>chargement patientez...</p> */}
            <Spinner label="Loading . . . " color="primary" size="lg" />
          </div>
        )}
        {error && !load && (
          <p className="flex items-center justify-center text-5xl md:h-[calc(100vh-350px)] h-[calc(100vh-310px)]">
            {errorMessage + ' waite a few moments for retry'}
          </p>
        )}
      </div>

      <div className="flex w-fit h-16 sm:text-sm text-xs   ">
        <Button
          icon={status == Category.Raw ? imgUncatActive : imgUncatDesactive}
          className={`w-auto ${
            status == Category.Raw
              ? 'bg-black rounded-xl text-white font-semibold'
              : 'text-[#828B8C]  bg-transparent'
          }`}
          onClick={() => {
            setStatut(Category.Raw);
          }}
        >
          {Category.Raw} Data
        </Button>
        <Button
          icon={status == Category.Cleaned ? imgcatActive : imgcatDesactive}
          className={`w-auto ${
            status == Category.Cleaned
              ? 'bg-black rounded-xl text-white font-semibold'
              : 'text-[#828B8C] bg-transparent'
          }`}
          onClick={() => {
            setStatut(Category.Cleaned);
          }}
        >
          {Category.Cleaned} 
        </Button>
      </div>
    </div>
  );
};

export default ReportsCleaner;
