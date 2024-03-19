import { Button } from '@/app/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import closeIcon from '../../../../../../../public/icons/closeIcon.svg';
import { clearFormCookies } from '@/cookies/cookies';

type OnBehalfModalProps = {
  shouldShow: boolean;
  onRequestClose: () => void;
  onBehalfTranslation:{
    title:string,
    des:string,
    back:string,
    forward:string
  }
};

const OnBehalfModal: React.FC<OnBehalfModalProps> = ({
  shouldShow,
  onRequestClose,
  onBehalfTranslation
}) => {
  const router = useRouter();

  const cancelReport = () => {
    clearFormCookies();
    router.push('/report');
  };

  return shouldShow ? (
    <div className="fixed top-0 left-0 flex items-center justify-center z-[1] h-full w-full backdrop backdrop-blur-md overflow-auto">
      <div
        className="w-3/4 lg:max-w-md p-8   bg-white relative rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          <div onClick={() => onRequestClose()} className="ml-auto w-fit mb-8">
            <AnimateClick>
              <Image src={closeIcon} alt="Close icon" />
            </AnimateClick>
          </div>
          <h1 className="font-bold text-2xl mb-4 text-center text-primaryColor">
            {onBehalfTranslation.title}
          </h1>
          {onBehalfTranslation.des}
        </div>
        <div className="flex mt-8 items-center justify-between">
          <Button variant="disabled" onClick={() => onRequestClose()}>
            {onBehalfTranslation.back}
          </Button>
          <Button onClick={() => cancelReport()}>
            <a href="/report">{onBehalfTranslation.forward}</a>
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default OnBehalfModal;
