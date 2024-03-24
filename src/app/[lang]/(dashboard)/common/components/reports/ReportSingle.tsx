'use client';
import React from 'react';
import Header from './Header';
import ReportSummary from './reports-cleaner/report-summary/ReportSummary';
import ReportActions from './reports-cleaner/report-actions/ReportActions';
import { useAuth } from '@/app/hooks/useAuth';
import { Role } from '@/utils/utils';

const ReportSingle = () => {
  const { user } = useAuth();
  return (
    <div>
      <Header href="/cleaned-data" title="Data Info" />

      <div className="flex  gap-x-6">
        <ReportSummary />
        {user?.role === Role.CLEANER && (
          <>
            <ReportActions />
          </>
        )}
      </div>
    </div>
  );
};

export default ReportSingle;
