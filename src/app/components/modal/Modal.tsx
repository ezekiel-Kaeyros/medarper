import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  shouldShow: boolean;
  onRequestClose: () => void;
};

const Modal: React.FC<ModalProps> = ({
  shouldShow,
  onRequestClose,
  children,
}) => {
  return shouldShow ? (
    <div
      className="fixed top-0 left-0 flex items-center justify-center z-[1] h-full w-full bg-black/40 overflow-auto"
      onClick={onRequestClose}
    >
      <div
        className="w-3/4 p-5 bg-white relative rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* <button
          className="text-xl absolute rounded-md right-4 top-4 hover: bg-red-50 py-1 px-3 shadow-md text-secondaryColor"
          onClick={onRequestClose}
        >
          X
        </button> */}
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
