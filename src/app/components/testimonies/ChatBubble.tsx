import Image from 'next/image';
import React from 'react';
import MessageBubble from '../../../../public/icons/chatBubble.svg';

type ChatBubbleProps = {
  message: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <div className="relative rtl:-ml-24 h-full w-full flex items-center justify-center px-[15%] text-wrap ">
      <Image
        className="w-full h-full absolute object-contain"
        src={MessageBubble}
        alt="Message bubble"
      />
      {/* <div className="absolute h-36 lg:h-64 lg:left-16 flex flex-col justify-between left-10 top-10 lg:top-24 text-[.8rem] lg:text-lg w-[13rem] lg:w-[22rem] rtl:right-12 lg:rtl:right-20 rtl:top-5 lg:rtl:top-16"> */}
      <div className="xl:text-lg lg:text-sm sm:text-[7px] text-[7px] object-contain   mt-[-25px]">
        {message}
        <div className="font-bold w-fit text-end   pr-[10%]  ml-auto text-primaryColor ">
          <p className="w-fit">
            Haroun K., <br /> Tübingen
          </p>
          {/* <p className="w-fit">Tübingen</p> */}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
