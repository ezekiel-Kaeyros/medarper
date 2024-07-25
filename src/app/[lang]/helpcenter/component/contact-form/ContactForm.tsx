'use client';
import { Button } from '@/app/components/button/Button';
import EmailField from '@/app/components/forms/email-field/EmailField';
// import TextArea from '@/app/components/forms/text-area/TextArea';
import TextArea from '@/app/components/forms/text-area/TextArea';
import InputField from '@/app/components/forms/text-field/InputField';
import React from 'react';

type Form = {
  formTranslation: {
    firstName: string;
    lastName: string;
    subject: string;
    email: string;
    textArea: string;
    send: string;
  };
};

const ContactForm: React.FC<Form> = ({ formTranslation }) => {
  return (
    <form action="">
      <div className="flex space-x-4">
        <div className="w-full">
          <div className="col-span-2 ">
            <InputField name={'name'} placeholder={formTranslation.firstName} />
          </div>
          <div className="col-span-2 ">
            <InputField name={'name'} placeholder={formTranslation.lastName} />
          </div>
          <div className="col-span-2">
            <InputField name={'name'} placeholder={formTranslation.subject} />
          </div>
          <div className="col-span-2">
            <EmailField name="email" placeholder={formTranslation.email} />
          </div>
        </div>

        <div className="w-full h-full">
          <TextArea
            name={'name'}
            title=""
            numberRows={8}
            placeholder={formTranslation.textArea}
            props={undefined}
            type="text"
          />
        </div>
      </div>
      <Button className="w-fit rounded-xl ml-auto mt-8 mb-12" variant="default">
        {formTranslation.send}
      </Button>
    </form>
  );
};

export default ContactForm;
