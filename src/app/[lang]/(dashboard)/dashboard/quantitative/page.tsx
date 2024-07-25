import React from 'react';
import QuantitativeChart from '@/app/components/quantitative/QuantitativeChart';

const Page = () => {

  //         user.then((result1) => {
  //           if (typeof result1 == 'object') {
  //             setUserCookies({
  //               ...result1,
  //               token: result.headers.authorization,
  //             });
  //           }
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       if (typeof error.response.data.message == 'string') {
  //         if (error.response.data.message !== 'Too Many Requests.') {
  //           removeUserCookies();
  //           window.location.href = '/en/login';
  //         }
  //       }
  //     });
  // }, []);
  return (
    <div className="mt-8">
      <h1 className="font-bold text-2xl mb-4">Quantitative data</h1>
      {/* {(loading && (
        <div className="w-full">
          <Loading />
        </div>
      )) || (
        
      )} */}
      <QuantitativeChart />
    </div>
  );
};

export default Page;
