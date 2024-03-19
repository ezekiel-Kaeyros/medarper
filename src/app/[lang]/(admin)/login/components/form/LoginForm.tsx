'use client';
import { Button } from '@/app/components/button/Button';
import EmailField from '@/app/components/forms/email-field/EmailField';
import PasswordField from '@/app/components/forms/password-field/PasswordField';
import React from 'react';

const LoginForm = () => {
  return (
    <form className="p-8 max-w-md mx-auto bg-white border-t-8 border-primaryColor mt-10 shadow-lg rounded-md">
      <h1 className="font-medium text-2xl text-center py-4 text-gray-800">
        Sign in to Dashboard
      </h1>
      <EmailField name="email" placeholder="user@email.com" label="Email" />
      <PasswordField />
      <Button href="/admin" variant="primary">
        Sign in
      </Button>
    </form>
  );
};

export default LoginForm;
