import Image from 'next/image';
import img1 from '../../../../../public/images/Vector (5).svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Publication: React.FC<{
  img?: any;
  date?: string;
  text?: string;
    title?: string;
  id?:string
}> = (props) => {
      const pathname = usePathname();
      const urlSpli = pathname.split('/');
  return (
    <>
      <div className="lg:w-[492px] sm:w-[33%] w-[40%] h-full ">
        <Image
          src={props.img}
          alt=""
          className="h-full w-full  object-cover "
        />
      </div>
      <div className="sm:w-[67%] w-[60%]  h-full flex flex-row items-center justify-center text-[#2B8049] px-4 bg-white ">
        <div>
          <span className="lg:text-xl sm:text-sm text-[10px]">
            {props.date}
          </span>
          <h2 className="font-bold lg:text-4xl sm:text-base text-xs lg:mt-5 sm:mt-2 mt-1">
            {props.title}
          </h2>
          <p className="lg:text-3xl sm:text-base text-xs lg:my-10 sm:my-4 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis .
          </p>
          <Link href={`/${urlSpli[1]}/anti-muslim/${props.id}`}>
            <div className="flex  justify-center text-[#4F4949] float-right">
              <Image
                src={img1}
                alt=""
                className="lg:w-auto lg:h-auto w-3  lg:mr-5 sm:mt-0  mr-2"
              />
              <span className="lg:text-xl text-[10px]">weiterlesen</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
    };

    export default Publication
