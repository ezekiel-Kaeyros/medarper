'use client';

import { ReactNode } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Le74BopAAAAAMDTsdx8Dx1fCpa3IhOwgNLdkJ-z">
      {children}
    </GoogleReCaptchaProvider>
  );
}
