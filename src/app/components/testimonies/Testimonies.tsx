import React from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import ChatPerson from '../../../../public/icons/chatPerson.svg';
import ChatPersonWithoutForm from '../../../../public/images/PersonWithoutForm.svg';
import ChatBubble from './ChatBubble';
import FormRefferal from '../../../../public/icons/formReferral.svg';
import InputField from '../forms/text-field/InputField';
import { Button } from '../button/Button';

type TestimoniesProps = {
  content: { bubbleMessage: string };
};

const Testimonies: React.FC<TestimoniesProps> = ({ content }) => {
  return (
    <div className="my-8 relative h-full lg:w-full lg:my-24 px-4 lg:px-[10rem]">
      <Image
        className="absolute lg:hidden w-40 lg:w-[20rem] lg:-top-[14rem] -lg:left-64 rtl:-right-[4rem] -top-[8.4rem] rtl:-z-20 -z-10 -left-16"
        src={FormRefferal}
        alt="Form"
      />
      <div className="relative rtl:-scale-x-100">
        <div className="relative lg:ml-[16rem] rtl:mr-24 lg:rtl:mr-[400px] lg:mb-20">
          <ChatBubble message={content?.bubbleMessage} />
        </div>
        <Image
          className="pt-[6rem] lg:hidden lg:w-[40rem] lg:pt-[8rem] absolute -z-10 -right-[6rem] top-[4rem]"
          src={ChatPerson}
          alt="Person talking"
        />
        {/* Chat person without form */}
        <Image
          className="pt-[6rem] lg:block hidden lg:w-[40rem] lg:pt-[4rem] absolute -z-10 -right-[6rem] top-[7rem]"
          src={ChatPersonWithoutForm}
          alt="Person talking"
        />
      </div>

      <div className="left-0 rtl:-scale-x-100 pt-12 lg:pt-[6.5rem] lg:w-full z-10">
        <ProgressBar percentage={20} />
      </div>

      <div className="block sm:hidden mt-20">
        <div>
          <h1 className="text-[#2F804A] font-semibold">
            Anmerkungen und Feedback
          </h1>
          <div>
            <p>
              Du hast Probleme mit unserem Meldeformular oder eine allgemeine
              Frage oder Anmerkung die Du mitteilen möchtest?
            </p>
            <p>
              Schreib’ uns gerne eine E-Mail über das untenstehende Formular und
              wir nehmen Deine Information auf.
            </p>
          </div>
        </div>
        <form action="">
          <div className="mt-5">
            <div className="grid grid-cols-2 items-center gap-x-2">
              <div className="mt-0 space-y-1">
                <InputField name="firstName" placeholder="Vorname*" />
                <InputField name="firstName" placeholder="Vorname*" />
                <InputField name="firstName" placeholder="Vorname*" />
                <InputField name="firstName" placeholder="Vorname*" />
              </div>
              <div className="h-[100%]">
                <textarea
                  placeholder="Nachrict*"
                  className="appearance-none border rounded-lg w-full py-3 px-3 leading-tight border-gray-300  focus:outline-none focus:border-primaryColor focus:bg-white placeholder-primaryColor placeholder:text-sm h-[100%]"
                />
              </div>
            </div>

            <div className="flex justify-end mt-2">
              <Button className="bg-[#DC6756] w-fit">Senden</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonies;
