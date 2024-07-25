'use client';
import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import ReportSummary from './reports-cleaner/report-summary/ReportSummary';
import ReportActions from './reports-cleaner/report-actions/ReportActions';
import CategorizeDataForm from './reports-cleaner/form/CategorizeDataForm';
import { usePathname } from 'next/navigation';
import { reportsCardTableUncategorized } from '../../../dashboard/reports/reportsCardDatas';
import {
  ReportSummaryType,
  ReportType,
} from '../../../dashboard/reports/reportSummaryType';
import { useFindReport } from '@/app/hooks/useFindReport';
import { getAllUsers } from '@/services/userService';
import { useAuth } from '@/app/hooks/useAuth';
import { Role } from '@/utils/utils';
import ReportService from '@/services/reportService';
import { reportType, reportType2 } from '@/utils/shared-types';
// import ReportSummaryCleanData from './reports-cleaner/report-summary/ReportSummaryCleanData';
import { AdminContext } from '../../context/AdminContext';
import { Spinner } from '@nextui-org/react';
import { AuthContext } from '@/app/context/AuthContext';

const ReportSingle = () => {
  const { reports, setReports, IshowHandler , isShow} = useContext(AuthContext);

  const pathname = usePathname();
  const urlSplit = pathname.split('/');

  const { uncategorizedData } = useFindReport();
  const { user } = useAuth();
  const [reports1, setReport] = useState<reportType2 | undefined>();
  const [reports2, setReport2] = useState<reportType2 | undefined>();

  const [refreshCurrent, setRefreshCurrent] = useState(false);

  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateReport = (status: string) => {
    reports1?.status2 && delete reports1.status2;
    reports1?.description2 && delete reports1.description2;
    reports1?.category2 && delete reports1.category2;
    const array = reports.map((items) => {
      if (items._id == reports1?._id) {
        return {
          ...reports1,
          status2: status,
          description2: undefined,
          category2: [],
        };
      } else {
        return items;
      }
    });
    setReports(array)
    setReport({
      ...reports1,
      status2: status,
      description2: undefined,
      category2: [],
    });
    setReport2(undefined);
  };
  const CleanReport = (description: string) => {
    reports1?.status2 && delete reports1.status2;
    reports1?.description2 && delete reports1.description2;
    reports1?.category2 && delete reports1.category2;
    const array = reports.map((items) => {
      if (items._id == reports1?._id) {
        return {
          ...reports1,
          status2: 'cleaned',
          description2: description,
          category2: [],
        };
      } else {
        return items;
      }
    });
    setReports(array);
    setReport2({
      ...reports1,
      status2: 'cleaned',
      description2: description,
      category2: [],
    });
  };
  const categorizeReport = (description: string, categorise: any[]) => {
    reports1?.status2 && delete reports1.status2;
    reports1?.description2 && delete reports1.description2;
    reports1?.category2 && delete reports1.category2;
    const array = reports.map((items) => {
      if (items._id == reports1?._id) {
        return {
          ...reports1,
          status2: 'cleaned',
          description2: description,
          category2: categorise,
        };
      } else {
        return items;
      }
    });
    setReports(array);
    setReport({
      ...reports1,
      status2: 'cleaned',
      description2: description,
      category2: categorise,
    });
  };
  // const refreshHandler = () => {
  //   setRefresh(true);
  //   setRefreshRaw(false);
  // };

  // const refreshCurrentHandler = () => {
  //   setRefreshCurrent(true);
  //   setRefreshRaw(true);
  // };
  useEffect(() => {
 isShow && IshowHandler();
  
    // if (reports.length == 0) {
      const response = new ReportService()
        .getAllReport()
        .then((result) => {
          const report1 = result.data.filter(
            (item) => item._id == urlSplit[urlSplit.length - 1]
          );
          console.log('report1111', report1);

          if (
            report1[0] &&
            report1[0].updatereport &&
            report1[0].updatereport &&
            report1[0].updatereport.status &&
            report1[0].updatereport.status == 'cleaned' &&
            user?.role == 3
          ) {
            const report = { ...report1[0] };
            delete report1[0].updatereport;

            setReport2({
              ...report1[0],
              status2:
                report.updatereport && report.updatereport.status
                  ? report.updatereport.status
                  : 'pending',
              description2:
                report.updatereport && report.updatereport.description
                  ? report.updatereport.description
                  : undefined,
              category2:
                report.updatereport && report.updatereport.category
                  ? [...report.updatereport.category]
                  : undefined,
            });
          } else {
            setReport2(undefined);
          }
          const report = { ...report1[0] };

          setReport({
            ...report1[0],
            status2:
              report.updatereport &&
              report.updatereport &&
              report.updatereport.status
                ? report.updatereport.status
                : 'pending',
            description2:
              report.updatereport &&
              report.updatereport &&
              report.updatereport.description
                ? report.updatereport.description
                : undefined,
            category2:
              report.updatereport &&
              report.updatereport &&
              report.updatereport.category
                ? [...report.updatereport.category]
                : [],
          });
          setRefreshCurrent(false);
          setLoad(false);
          //  setReports(result.data);
        })
        .catch((error: any) => {
          console.log(error);
          setLoad(false);
          setError(true);
          setErrorMessage(error.response.data.message);
        });
    // } else {
    //   const report1 = reports.filter(
    //     (item) => item._id == urlSplit[urlSplit.length - 1]
    //   );
    //   console.log('report1111', report1);
    //   setReport2(report1[0]);
    //   if (
    //     report1[0] &&
    //     report1[0].updatereport &&
    //     report1[0].updatereport &&
    //     report1[0].updatereport.status &&
    //     report1[0].updatereport.status == 'cleaned' &&
    //     user?.role == 3
    //   ) {
    //     const report = { ...report1[0] };
    //     delete report1[0].updatereport;

    //     setReport2({
    //       ...report1[0],
    //       status2:
    //         report.updatereport && report.updatereport.status
    //           ? report.updatereport.status
    //           : 'pending',
    //       description2:
    //         report.updatereport && report.updatereport.description
    //           ? report.updatereport.description
    //           : undefined,
    //       category2:
    //         report.updatereport && report.updatereport.category
    //           ? [...report.updatereport.category]
    //           : undefined,
    //     });
    //   } else {
    //     //  setReport2(reports1);
    //   }
    //   //  const report = { ...report1[0] };
    //   setReport(report1[0]);
    //   //  setReport({
    //   //    ...report1[0],
    //   //    status2:
    //   //      report.updatereport &&
    //   //      report.updatereport &&
    //   //      report.updatereport.status
    //   //        ? report.updatereport.status
    //   //        : 'pending',
    //   //    description2:
    //   //      report.updatereport &&
    //   //      report.updatereport &&
    //   //      report.updatereport.description
    //   //        ? report.updatereport.description
    //   //        : undefined,
    //   //    category2:
    //   //      report.updatereport &&
    //   //      report.updatereport &&
    //   //      report.updatereport.category
    //   //        ? [...report.updatereport.category]
    //   //        : [],
    //   //  });
    //   setRefreshCurrent(false);
    //   setLoad(false);
    // }
  }, []);

  return (
    <div className="pb-[2rem] sm:h-screen h-[calc(100vh-80px)] overflow-x-auto ">
      {user && user.role == 3 && (
        <Header href="/clean-data" title="Data Info" />
      )}
      {user && user.role == 1 && <Header href="/reports" title="Data Info" />}
      {user && user.role == 2 && (
        <Header href="/cleaned-data" title="Data Info" />
      )}
      {user && user.role == 4 && (
        <Header href="/dangerous-reports" title="Data Info" />
      )}

      {!load && !error && (
        <div className="flex lg:flex-row   flex-col-reverse gap-6 ">
          <ReportSummary
            report={reports1}
            incidentDescription={
              uncategorizedData?.summary?.incidentDescription
            }
            color={reports2 ? true : false}
          />
          {(user?.role === Role.CLEANER || user?.role === Role.RISK_MANAGER) &&
            reports1 && (
              <ReportActions
                text={
                  !reports2?.description
                    ? reports1?.description
                    : reports2.description
                }
                WhatHappened={uncategorizedData?.summary.incidentDescription}
                report={reports2}
                action={reports1.status2 ? reports1.status2 : 'pending'}
                updateReport={updateReport}
                cleanReport={CleanReport}
              />
            )}
          {user?.role == Role.VIEWER && (
            <CategorizeDataForm
              report={reports1}
              categoriseReport={categorizeReport}
            />
          )}
        </div>
      )}

      {load && (
        <div className="text-center text-2xl h-[70vh] flex place-items-center w-full justify-center">
          <Spinner label="Loading . . . " color="primary" size="lg" />
        </div>
      )}
      {error && !load && (
        <p className="flex items-center justify-center text-5xl h-full">
          {errorMessage + ' waite a few moments for retry'}
        </p>
      )}
    </div>
  );
};

export default ReportSingle;
