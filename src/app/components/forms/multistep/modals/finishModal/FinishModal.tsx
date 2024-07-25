import { Button } from '@/app/components/button/Button';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import closeIcon from '../../../../../../../public/icons/closeIcon.svg';
import good from '../../../../../../../public/images/Vector (23).svg';
import arrow from '../../../../../../../public/images/Vector (24).svg';
import { clearFormCookies } from '@/cookies/cookies';
import Link from 'next/link';

type FinishModalProps = {
  shouldShow: boolean;
  lang: string;
  //   onRequestClose: () => void;
  confirmModalTranslation?: {
    title: string;
    des: string;
    back: string;
    ja: string;
  };
  sendReportHandler?: any;
};

const FinishModal: React.FC<FinishModalProps> = ({
  shouldShow,
  //   onRequestClose,
  confirmModalTranslation,
  lang,
  sendReportHandler,
}) => {
  const router = useRouter();

  const pushToFaq = () => {
    router.push(`/${lang}#faq`);
  };

  const cancelReport = () => {
    clearFormCookies();
    window.location.href = `/` + lang;
  };

  return shouldShow ? (
    <div className="fixed top-0 left-0 flex items-center justify-center z-[1] h-full w-full backdrop backdrop-blur-md overflow-auto">
      <div className="w-3/4 lg:max-w-md p-8   bg-white relative rounded-lg">
        <div>
          {/* <div className="ml-auto w-fit mb-8">
            <AnimateClick>
              <Image src={closeIcon} alt="Close icon" />
            </AnimateClick>
          </div> */}
          <h1 className="font-bold text-2xl mb-4 text-[#2F804A]">
            {/* {confirmModalTranslation.title} */}
            Vielen Dank!
          </h1>
          {/* {confirmModalTranslation.des} */}
          <p>
            Danke das du deine Erfahrungen mit uns teilst. Mit dem Ausfüllen des
            Meldeformulars trägst du dazu bei, dass Diskriminierung und Gewalt
            sichtbarer gemacht werden.
          </p>
        </div>
        <div className="flex mt-8 items-center justify-center gap-5">
          <a href={`/${lang}#faq`}>
            <Button
              className="flex justify-center items-center h-12 w-fit m-auto py-3 gap-x-8"
              variant="primary"
              onClick={() => cancelReport()}
            >
              {/* <a href={`/`}>{confirmModalTranslation.ja}</a>
            {confirmModalTranslation.ja} */}
              <span>Fertig</span>
              <Image src={good} alt="" className="h-full p-2 w-10" />
            </Button>
          </a>
        </div>
        <a
          href={`/${lang}/verweisberatung`}
          className="text-[#2F804A] flex justify-center gap-5 items-center my-8"
        >
          <Image src={arrow} alt="" />
          <span className="underline">zur Verweisberatung</span>
        </a>
      </div>
    </div>
  ) : null;
};

export default FinishModal;
