import { Locale, i18n } from '@/i18n.config';
import { AdminProvider } from '../common/context/AdminContext';
import Sidebar from '../common/sidebar/Sidebar';
import NextTopLoader from 'nextjs-toploader';
import Header from '../common/components/reports/Header';
import AdminHeader from '../common/components/header/header';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <AdminProvider>
      {/* <NextTopLoader
        // color="#2299DD"
        // initialPosition={0.08}
        // crawlSpeed={200}
        // height={3}
        // crawl={true}
        // showSpinner={true}
        // easing="ease"
        // speed={200}
        // shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      /> */}
      <div className="w-screen flex h-screen overflow-hidden">
        <Sidebar />
        <div className="bg-white  sm:w-5/6 w-screen  h-screen">
          <AdminHeader />
          <main className=" md:p-16 p-3 sm:h-screen h-[calc(100vh-70px)]">
            {children}
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}
