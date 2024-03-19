'use client';
import img1 from '../../../../public/images/Rectangle 247.svg';
import img2 from '../../../../public/images/Rectangle 247 (4).svg';
import img3 from '../../../../public/images/Rectangle 247 (1).svg';
import arrow from '../../../../public/images/Vector (12).svg';
import Publication from './publication/Publication';
import Group from '../../../../public/icons/Group.svg';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  PaginationItemType,
  PaginationItemValue,
  cn,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import {} from '@nextui-org/react';
import Image from 'next/image';
import { Ref } from '@typegoose/typegoose';

type TypePublication = {
  id?: string;
  img: any;
  date: string;
  text: string;
  title: string;
};

const Publications: TypePublication[] = [
  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 1',
    id: '1',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 2',
    id: '2',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 3',
    id: '3',
  },

  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 1',
    id: '4',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 2',
    id: '5',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 3',
    id: '12',
  },
  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 1',
    id: '6',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 2',
    id: '7',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 3',
    id: '8',
  },
  {
    img: img1,
    date: '19.10.2023',
    text: 'loem',
    title: 'News Thema 1',
    id: '9',
  },
  {
    img: img2,
    date: '22.10.2023',
    text: 'loem',
    title: 'News Thema 2',
    id: '10',
  },
  {
    img: img3,
    date: '06.11.2023',
    text: 'loem',
    title: 'News Thema 3',
    id: '11',
  },
];

const AntiMuslimComponent = () => {
  const [pageTable, setPageTable] = useState<number>(4);
  const [page, setPage] = useState(1);
  const pages = Math.ceil(Publications.length / pageTable);

  const items = useMemo(() => {
    const start1 = (page - 1) * pageTable;
    const end1 = start1 + pageTable;

    return Publications.slice(start1, end1);
  }, [page, pageTable]);

  const [sortDescriptor, setSortDescriptor] = useState<any>({
    column: 'fullname',
    direction: 'descending',
  });

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a;
      const second = b;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  type PaginationItemRenderProps = {
    key?: any;
    // The pagination item ref.
    ref?: any;
    // The pagination item value.
    value: PaginationItemValue;
    // The pagination item index.
    index: number;
    // The active page number.
    activePage: number;
    // Whether the pagination item is active.
    isActive: boolean;
    // Whether the pagination item is the first item in the pagination.
    isFirst: boolean;
    // Whether the pagination item is the last item in the pagination.
    isLast: boolean;
    // Whether the pagination item is the next item in the pagination.
    isNext: boolean;
    // Whether the pagination item is the previous item in the pagination.
    isPrevious: boolean;
    // The pagination item className.
    className: string;
    // Callback to go to the next page.
    onNext: () => void;
    // Callback to go to the previous page.
    onPrevious: () => void;
    // Callback to go to the page.
    setPage: (page: number) => void;
  };

  const renderItem = ({
    key,
    ref,
    value,
    isActive,
    setPage,
    className,
    onNext,
    onPrevious,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={cn(className, 'bg-transparent min-w-8 w-8 h-8')}
          onClick={onNext}
        >
          <Image src={arrow} alt="" />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={cn(className, 'bg-default-200/50 min-w-8 w-8 h-8 hidden')}
          onClick={onPrevious}
        >
          <Image src={arrow} alt="" />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      );
    }

    // cursor is the default item
    return (
      <button
        key={key}
        ref={ref}
        className={cn(className, isActive && ' font-bold')}
        //   isActive &&
        //     'text-white bg-gradient-to-br from-indigo-500 to-pink-500 font-bold'
        // )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };
  return (
    <div className="">
      {/* {Publications.map((item, index) => (
        <Publication
          img={item.img}
          key={index}
          date={item.date}
          title={item.title}
          id={item.id}
        />
      ))} */}

      <Table
        aria-label="Users table"
        bottomContent={
          <div className="flex justify-center items-center mb-6">
            <Pagination
              renderItem={renderItem}
              radius="full"
              isCompact
              variant="light"
              showShadow={false}
              showControls
              // color="undefined"
              color="success"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              classNames={{
                wrapper: ' border-transparent shadow-none	',
                forwardIcon: 'hidden',
                prev: 'hidden',
                next: ' bg-white w-9 text-4xl font-bold text-[#2F804A]',
                item: 'lg:mx-6 md:mx-4 sm:mx-3 mx-2 bg-black text-[#2F804A]  bg-transparent shadow-none  hover:bg-white text-xl ',
                cursor:
                  'bg-white rounded-full  text-[#2F804A] font-bold text-2xl',
              }}
            />
          </div>
        }
        bottomContentPlacement="outside"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        classNames={{
          wrapper: 'min-h-[222px] border-transparent shadow-none	bg-transparent',
          table: 'border-none',
          thead: 'sm:block hidden',
        }}
      >
        <TableHeader columns={['Publikationen']}>
          <TableColumn className="text-[#2F804A] font-bold lg:text-[70px] sm:text-xl my-10 sm:block hidden bg-transparent ">
            Publikationen
          </TableColumn>
        </TableHeader>
        <TableBody items={sortedItems} className="bg-[transparent] border-0">
          {sortedItems.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="flex lg:h-[450px] h-[200px] w-full justify-between border rounded-xl lg:my-10 sm:my-5 my-3 sm p-0 ">
                  <Publication
                    img={item.img}
                    key={index}
                    date={item.date}
                    title={item.title}
                    id={item.id}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <div className="flex justify-end sm:hidden">
        <Image src={Group} alt="bg-image" className="w-[35%] -mr-5" />
      </div>
    </div>
  );
};
export default AntiMuslimComponent;
