'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ItemSlide from './item-slide/ItemSlide';

// import ReportDefaultImage from '../../../../../../../public/images/reportDefaultImage.png';
// import ReportCard from '../report-card/ReportCard';

const Carousel: React.FC<{ content: string; getStep: any }> = ({
  content,
  getStep,
}) => {
  const reports = [
    {
      id: 1,

      //
    },
    {
      id: 2,
    },
    {
      id: 3,
    },

    {
      id: 4,
    },

    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'lightgrey' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'lightgrey' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       padding: '10px',
    //     }}
    //   >
    //     <ul style={{ margin: '0px' }}> {dots} </ul>
    //   </div>
    // ),
    customPaging: (i: number) => (
      <div
        style={{
          width: '30px',
          color: 'blue',
        }}
      >
        <div className=" mt-6 h-2 rounded-full w-6"></div>
      </div>
    ),

    afterChange: function (index: any) {
      getStep(reports.length, index + 1);
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    // responsive: [
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 680,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="lg:w-full w-[90%] m-auto cursor-pointer z-50">
      <Slider {...settings}>
        {' '}
        {reports.map((item, index) => (
          <ItemSlide key={index} content={content} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
