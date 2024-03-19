import Image from 'next/image';
import React from 'react';
import MessageBubble from '../../../../public/icons/chatBubble.svg';

type ChatBubbleProps = {
  message: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <div className="relative rtl:-ml-24">
      <Image
        className="w-[17rem] lg:w-[32rem] rtl:mr-2 "
        src={MessageBubble}
        alt="Message bubble"
      />
      <div className="absolute h-36 lg:h-64 lg:left-16 flex flex-col justify-between left-10 top-10 lg:top-24 text-[.8rem] lg:text-lg w-[13rem] lg:w-[22rem] rtl:right-12 lg:rtl:right-20 rtl:top-5 lg:rtl:top-16">
        {message}
        <div className="font-bold w-fit text-xs lg:text-lg -mt-0 pr-[3rem]  ml-auto text-primaryColor">
          <p className="w-fit">Haroun K., </p>
          <p className="w-fit">Tübingen</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
