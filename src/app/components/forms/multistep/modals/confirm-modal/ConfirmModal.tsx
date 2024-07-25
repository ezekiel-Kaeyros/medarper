import { Button } from '@/app/components/button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import closeIcon from '../../../../../../../public/icons/closeIcon.svg';
import { clearFormCookies } from '@/cookies/cookies';
import { useState } from 'react';

type ConfirmModalProps = {
  shouldShow: boolean;
  lang: string;
  onRequestClose: () => void;
  confirmModalTranslation: {
    title: string;
    des: string;
    back: string;
    ja: string;
  };
  sendReportHandler?: any;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  shouldShow,
  onRequestClose,
  confirmModalTranslation,
  lang,
  sendReportHandler,
}) => {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const cancelReport = () => {
    clearFormCookies();
    router.push(`/`);
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
          <div onClick={() => onRequestClose()} className="ml-auto w-fit mb-4">
            <AnimateClick>
              <Image src={closeIcon} alt="Close icon" />
            </AnimateClick>
          </div>
          <h1 className="font-bold text-2xl mb-4 text-[#2F804A]">
            {confirmModalTranslation.title}
          </h1>
          {/* {confirmModalTranslation.des} */}
          <p className="my-8">
            {`  „Wenn du das Meldeformular in Vertretung für eine Person ausfüllst,
            bedeutet das, dass du das Formular aus Perspektive der betroffenen
            Person und entsprechend der Selbstangaben ausfüllst. Sollte dies
            nicht der Fall sein und du möchtest einen Vorfall aus deiner
            Perspektive als Zeug*in schildern, klicke oben bitte die Option
            ‚Eine andere Person‘ an.“`}
          </p>
        </div>
        <div className="flex mt-8 items-center justify-between gap-5">
          <Button variant="disabled" onClick={() => onRequestClose()}>
            {/* {confirmModalTranslation.back} */}
            ABBRECHEN
          </Button>
          <Button
            disabled={load}
            variant="disabled"
            onClick={() => {
              setLoad(true);
              sendReportHandler();
            }}
            className="bg-[#E3775F]"
          >
            {/* <a href={`/`}>{confirmModalTranslation.ja}</a> */}
            {/* {confirmModalTranslation.ja} */}
            WEITER
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ConfirmModal;
