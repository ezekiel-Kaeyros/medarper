'use client';
import { useAuth } from '@/app/hooks/useAuth';
import { Role } from '@/utils/utils';
import React, { useContext, useEffect, useState } from 'react';
import HomeViewerAndAdmin from './HomeViewerAndAdmin';
import HomeCleaner from './HomeCleaner';
import HomeRiskManager from './HomeRiskManager';
import { getAllUsers } from '@/services/userService';
import AuthService from '@/services/authService';
import { Result } from 'postcss';
import ReportService, { getAllReport } from '@/services/reportService';
import { ReportType } from '../../../dashboard/reports/reportSummaryType';
import { reportType, reportType2 } from '@/utils/shared-types';
import { error } from 'console';
import { removeUserCookies, setUserCookies } from '@/cookies/cookies';
import axios from 'axios';
import { DecodeToken } from '../../../login/components/DecodeToken';
import { Spinner } from '@nextui-org/react';
import { AuthContext } from '@/app/context/AuthContext';

const Home = () => {
  const { reports, setReports,total,totalWeek,setNumbers,isShow, IshowHandler } = useContext(AuthContext);
  const { user } = useAuth();
  const [refresh, setRefresh] = useState(0);
  const [load, setLoad] = useState(reports.length==0);
  const [get, setGet] = useState(false);
  const [token, setToken] = useState('');
  const [report, setReport] = useState<reportType2[]>(reports.slice(0, 5));
  // const [total, setTotal] = useState(0);
  // const [totalWeek, setTotalWeek] = useState(0);
  // const [dangerous, setDangerous] = useState(0);

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
      let total = 0;
      let total_week = 0;

      await axios
        .request(options)
        .then(function (response) {
          const { data } = response;

          let report1: reportType2[] = [];
          if (user?.role === 3 && data.length > 0) {
            const report = data.reverse().filter((item: reportType) => {
              const differenceDate =
                new Date().getTime() - new Date(item.createdAt!).getTime();
              if (
                item.updatereport &&
                item.updatereport &&
                item.updatereport.status &&
                item.updatereport.status == 'pending'
              ) {
                total++;
                // console.log(Math.round(differenceDate / (1000 * 3600 * 24)));

                if (Math.round(differenceDate / (1000 * 3600 * 24)) <= 7) {
                  total_week++;
                }
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
                      : undefined,
                });
              } else {
                if (!item.updatereport) {
                  delete item.updatereport;
                  report1.push({ ...item });

                  total++;
                  // console.log(Math.round(differenceDate / (1000 * 3600 * 24)));

                  if (Math.round(differenceDate / (1000 * 3600 * 24)) <= 7) {
                    total_week++;
                  }
                }
              }
            });
            setReports(report1)
            // if (report1.length < 6 && report1.length > 0) {
            //   setReports(report1);
            // } else {
             setReport(report1.slice(0, 5));
            // }
          }

          if ((user?.role === 1 || user?.role == 2) && data.length > 0) {
            const report = data.reverse().filter((item: reportType) => {
              const differenceDate =
                new Date().getTime() - new Date(item.updatedAt!).getTime();

              if (
                item.updatereport &&
                item.updatereport &&
                item.updatereport.status &&
                item.updatereport.status == 'cleaned'
              ) {
                // console.log(Math.round(differenceDate / (1000 * 3600 * 24)));

                total++;
                if (Math.round(differenceDate / (1000 * 3600 * 24)) <= 7) {
                  total_week++;
                }
              }

              if (
                item.updatereport &&
                item.updatereport &&
                item.updatereport.status &&
                item.updatereport.status == 'cleaned' &&
                (!item.updatereport.category ||
                  (item.updatereport.category &&
                    item.updatereport.category.length == 0))
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
            // if (report1.length < 6 && report1.length > 0) {
            //   setReport(report1);
            // } else {
             setReport(report1.slice(0, 5));
            // }
            setReports(report1);

          }

          if (user?.role === 4 && data.length > 0) {
            const report = data.reverse().filter((item: reportType) => {
              const differenceDate =
                new Date().getTime() - new Date(item.updatedAt!).getTime();

              if (
                item.updatereport &&
                item.updatereport &&
                item.updatereport.status &&
                item.updatereport.status == 'Dangerous'
              ) {
                // console.log(Math.round(differenceDate / (1000 * 3600 * 24)));

                if (Math.round(differenceDate / (1000 * 3600 * 24)) <= 7) {
                  total_week++;
                }
                total++;

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
                      : undefined,
                });
              }
            });
            setReports(report1);

            // if (report1.length < 6 && report1.length > 0) {
            //   setReport(report1);
            // } else {
             setReport(report1.slice(0, 5));
            // }
          }
          setNumbers(total, total_week);
          // setTotal(total);
          // setTotalWeek(total_week);
            setTimeout(async () => {
              setRefresh((preview) => preview + 1);
            }, 20000);
        })
        .catch(function (error) {});
    } catch (error) {
    } finally {
      setLoad(false);
    }

    // setRefresh(false);
  };

  useEffect(() => {
 isShow && IshowHandler()
      const response = new AuthService()
        .refreshToken()
        .then((result) => {
          if (result.status === 201) {
            const user = DecodeToken(result.headers.authorization);
              setToken(result.headers.authorization);
              getReport(result.headers.authorization);

            user.then((result1) => {
              if (typeof result1 == 'object') {
                setUserCookies({
                  ...result1,
                  token: result.headers.authorization,
                });
                setRefresh(1);

              }
            });
          }
        })
        .catch((error) => {
          if (typeof error.response.data.message == 'string') {
            if (error.response.data.message !== 'Too Many Requests.') {
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

      // if (refresh > 0) {
      
      // }
    }, [refresh]);
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto h-screen">
      
      {load ? (
        <div className="text-center text-2xl h-[70vh] flex place-items-center w-full justify-center">
          {/* <p>chargement patientez...</p> */}
          <Spinner label="Loading . . . " color="primary" size="lg" />
        </div>
      ) : user?.role === Role.ADMIN ? (
        <HomeViewerAndAdmin
          report={report}
          total={total}
          total_week={totalWeek}
        />
      ) : user?.role === Role.VIEWER ? (
        <HomeViewerAndAdmin
          report={report}
          total={total}
          total_week={totalWeek}
        />
      ) : user?.role === Role.CLEANER ? (
        <HomeCleaner report={report} total={total} total_week={totalWeek} />
      ) : (
        user && (
          <HomeRiskManager
            report={report}
            total={total}
            total_week={totalWeek}
          />
        )
      )}
    </div>
  );
};

export default Home;
