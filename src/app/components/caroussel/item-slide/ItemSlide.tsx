import ChatBubble from '@/app/components/testimonies/ChatBubble';
import Image from 'next/image';
import ChatPersonWithoutForm from '../../../../../public/images/PersonWithoutForm.svg';

const ItemSlide: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="relative w-full">
      <div className="absolute w-6/12 sm:h-[80%] h-full overflow-hidden flex justify-end top-8">
        <ChatBubble message={content} />
      </div>
      <div className="flex justify-end mt-14 ">
        <Image
          className=" sm:mt-[30%] mt-[50%] w-6/12 z-50 "
          src={ChatPersonWithoutForm}
          alt="Person talking"
        />
      </div>
    </div>
  );
};
export default ItemSlide;
