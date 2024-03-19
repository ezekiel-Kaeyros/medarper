import { Locale, i18n } from '@/i18n.config';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/header/header';
import Head from 'next/head';
import { FormProvider } from '../context/FormContext';
import { Providers } from '../components/captcha/providers';
import { NextUIProvider } from '@nextui-org/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MEDAR report portal',
  description: 'Incident report portal',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  console.log(params?.lang);
  return (
    <html
      dir={params?.lang === 'ar' || params?.lang === 'fa' ? 'rtl' : 'ltr'}
      className="overflow-x-hidden"
      lang={params.lang}
    >
      <Head>
        <meta name="description">{metadata.description}</meta>
      </Head>
    
        <Providers>
          <FormProvider>
            <body className={`${inter.className} `}>
              {/* <Header lang={params.lang} /> */}
              {children}

              <script
                id="dacs"
                src="https://download.digiaccess.org/digiaccess"
                defer
              ></script>
            </body>
          </FormProvider>
        </Providers>
      
    </html>
  );
}
