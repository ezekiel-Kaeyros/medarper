import { Button } from '@/app/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import closeIcon from '../../../../../../../public/icons/closeIcon.svg';
import good from '../../../../../../../public/images/Vector (22).svg';
import notgood from '../../../../../../../public/images/Rectangle 340.svg';
import { clearFormCookies } from '@/cookies/cookies';
import { useState } from 'react';

type OnBehalfModalProps = {
  shouldShow: boolean;
  onRequestClose: () => void;
  onBehalfTranslation:{
    title:string,
    des:string,
    back:string,
    forward:string
  }
  reportHandler?:any
};

const OnBehalfModal: React.FC<OnBehalfModalProps> = ({
  shouldShow,
  onRequestClose,
  onBehalfTranslation,
  reportHandler
}) => {
  const router = useRouter();
  const [accept,setaccept]=useState(false)
  const [load, setLoad] = useState(false);

  const cancelReport = () => {
    clearFormCookies();
    window.location.href='/';
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
          <h1 className="font-bold text-2xl mb-4 text-primaryColor">
            {onBehalfTranslation.title}
          </h1>
          {onBehalfTranslation.des}
        </div>

        <div
          className="flex justify-end text-primaryColor  items-center my-5 gap-5"
          onClick={() => {
            setaccept((accept) => !accept);
          }}
        >
          <span>bitte hier ankreuzen</span>
          {accept && (
            <Image src={good} alt="" className="h-6 w-6 border  p-1" />
          )}
          {!accept && <Image src={notgood} alt="" className="h-6 w-6" />}
        </div>
        <div className="flex mt-8 items-center justify-between gap-5">
          <Button variant={'disabled'} onClick={() => cancelReport()}>
            {onBehalfTranslation.back}
          </Button>
          <Button
            disabled={load || !accept ? true : false}
            // onClick={() => reportHandler()}
            onClick={() => {
              setLoad(true);
              reportHandler();
            }}
            variant={!accept || load ? 'disabled' : 'default'}
          >
            {onBehalfTranslation.forward}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default OnBehalfModal;
