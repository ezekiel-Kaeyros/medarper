'use client';

import Image from 'next/image';
import LoginForm from './components/form/LoginForm';
import Logo from '../../../../../public/logo.svg';

const login = () => {
  return (
    <div className="pt-0 h-screen bg-slate-300 flex flex-col items-center justify-center">
      <div className="font-bold">
        <Image className="w-36" src={Logo} alt="Logo" />
      </div>
      <LoginForm />
    </div>
  );
};

export default login;
