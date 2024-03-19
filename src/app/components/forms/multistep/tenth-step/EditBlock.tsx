import Image from 'next/image';
import React from 'react';
import EditIcon from '../../../../../../public/icons/editIcon.svg';
import AnimateClick from '@/app/components/animate-click/AnimateClick';
import { EDIT_STEP, IS_EDITING } from '@/app/context/actions';
import { useFormContext } from '@/app/hooks/useFormContext';

type EditBlockProps = {
  question: string;
  answer: string | string[];
  type?: 'normal' | 'desc';
  step: number;
};

const EditBlock: React.FC<EditBlockProps> = ({
  question,
  answer,
  type,
  step,
}) => {
  const { dispatch } = useFormContext();

  const handleEdit = (step: number) => {
    dispatch({ type: IS_EDITING });
    dispatch({ type: EDIT_STEP, payload: step });
  };

  return (
    <div className="py-2 w-full">
      <div className="flex items-center">
        <h1 className="my-2 flex items-center  font-bold">{question}</h1>
        <span className="ml-4" onClick={() => handleEdit(step)}>
          <AnimateClick>
            <Image src={EditIcon} alt="Edit icon" />
          </AnimateClick>
        </span>
      </div>

      <div className="flex w-full text-white flex-wrap items-center">
        {typeof answer !== 'string'
          ? answer?.length !== 0 &&
            answer?.map(
              (element: string) =>
                element && (
                  <div
                    className={`${
                      type === 'desc'
                        ? 'bg-white w-full text-black'
                        : 'bg-primaryColor'
                    }  p-2 rounded-md mx-1 my-1`}
                    key="key"
                  >
                    {element && element}
                  </div>
                )
            )
          : answer && (
              <div className="bg-primaryColor p-2 rounded-md mx-1" key="key">
                {answer}
              </div>
            )}
      </div>
    </div>
  );
};

export default EditBlock;
