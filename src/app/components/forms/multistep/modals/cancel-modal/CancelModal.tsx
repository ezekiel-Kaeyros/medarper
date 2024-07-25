import { Button } from '@/app/components/button/Button';
import { useRouter } from 'next/navigation';
import closeIcon from '../../../../../../../public/icons/closeIcon.svg';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import Image from 'next/image';
import { clearFormCookies } from '@/cookies/cookies';

type CancelModalProps = {
  shouldShow: boolean;
  onRequestClose: () => void;
  cancelModalTranslation:{
    title:string,
    paragraph1:string,
    paragraph2:string,
    paragraph3:string,
    cancel:string,
    noFurther:string
  }
};

const CancelModal: React.FC<CancelModalProps> = ({
  shouldShow,
  onRequestClose,
  cancelModalTranslation
}) => {
  const router = useRouter();

  const cancelReport = () => {
    clearFormCookies();
    window.location.href='/'
    // router.push('/');
  };

  return shouldShow ? (
    <div
      className="fixed top-0 left-0 flex items-center justify-center z-[1] h-full w-full backdrop backdrop-blur-sm overflow-auto"
      onClick={onRequestClose}
    >
      <div
        className="w-full p-4 mx-4 md:mx-0 md:w-3/4 lg:max-w-md md:p-8 text-slate-800 bg-white relative rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="mb-16">
          <div onClick={() => onRequestClose()} className="ml-auto w-fit mb-8">
            <AnimateClick>
              <Image src={closeIcon} alt="Close icon" />
            </AnimateClick>
          </div>

          <h1 className="font-bold text-primaryColor">
            {cancelModalTranslation.title}
          </h1>
          <p className="mt-4">
            {cancelModalTranslation.paragraph1}
          </p>
          <p>
            {cancelModalTranslation.paragraph2}
          </p>
          <p className="font-bold mt-2">{cancelModalTranslation.paragraph3}</p>
        </div>
        <div className="flex justify-between gap-5">
          <Button onClick={() => cancelReport()} variant="disabled">
            {cancelModalTranslation.cancel}
          </Button>
          <Button onClick={onRequestClose}>{cancelModalTranslation.noFurther}</Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CancelModal;
