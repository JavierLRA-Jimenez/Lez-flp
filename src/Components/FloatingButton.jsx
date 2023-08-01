
import React from 'react';
import { RxTextAlignTop } from 'react-icons/rx';

const FloatingButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-4 flex right-4 text-white items-center justify-center md:text-3xl text-xl bg-red-700 w-10 md:w-[4rem] h-10 md:h-[4rem]  rounded-full cursor-pointer z-40"
      onClick={handleScrollToTop}
    >
      <RxTextAlignTop />
    </div>
  );
};

export default FloatingButton;
