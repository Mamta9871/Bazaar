import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://plus.unsplash.com/premium_photo-1681398731280-a08c591dfc58?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.dribbble.com/userupload/12846753/file/original-8947088bf7b751ab5bd520520ea8f863.png?resize=1024x728",
    "https://cdn.dribbble.com/userupload/6630456/file/original-b7aef2ce2e4e3e342aaad4312323a96d.png?resize=1024x819"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className='w-[400vw]  flex transition-transform duration-800'>
          {data.map((imageUrl, index) => (
            <img
              key={index}
              className='w-screen h-full object-cover'
              src={imageUrl}
              alt={`Img${index}`}
              loading='priority'
            />
          ))}
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-6 bottom-44'>
          <div
            onClick={prevSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center
            justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
            active:bg-gray-900 duration-300'>
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className='w-14 h-12 border-[1px] border-gray-700 flex items-center
            justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
            active:bg-gray-900 duration-300'>
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
