'use client';
import { useAuth } from '@/app/hooks/useAuth';
import { Role } from '@/utils/utils';
import React, { useContext, useEffect } from 'react';
import ReportsViewerAndAdmin from './ReportsViewerAndAdmin';
import ReportsCleaner from './ReportsCleaner';
import ReportsRiskManager from './ReportsRiskManager';
import { AuthContext } from '@/app/context/AuthContext';

const Reports = () => {
  const { user } = useAuth();
  const { reports, setReports, total, totalWeek, setNumbers, IshowHandler } =
    useContext(AuthContext);

  useEffect(() => {
  IshowHandler()
},[])
  return (
    <>
      {user?.role === Role.VIEWER ? (
        <ReportsViewerAndAdmin />
      ) : user?.role === Role.CLEANER ? (
        <ReportsCleaner />
      ) : (
        <ReportsRiskManager />
      )}
    </>
  );
};

export default Reports;
