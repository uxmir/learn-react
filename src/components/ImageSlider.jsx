"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";

const ImageSlider = () => {
  return (
    <div className="w-full mt-10">
      <ImageCarosel />
    </div>
  );
};

export default ImageSlider;

const ImageCarosel = () => {
  const slideImage = [
    {
      id: 1,
      item: "https://picsum.photos/seed/picsum/800/400",
    },
    {
      id: 2,
      item: "https://picsum.photos/800/400?grayscale",
    },
    {
      id: 3,
      item: "https://picsum.photos/800/400?blur=2",
    },
    {
      id: 4,
      item: "https://picsum.photos/id/237/800/400",
    },
  ];
  const [imageSlider, setImageSlider] = useState(1);
  const nextToSilde = () => {
    if (imageSlider < slideImage.length) {
      setImageSlider(imageSlider + 1);
    }
  };
  const backToSlide = () => {
    if (imageSlider > 1) {
      setImageSlider(imageSlider - 1);
    }
  };
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="w-full flex  transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${(imageSlider - 1) * 100}%)` }}
        >
          {slideImage.map((item) => (
            <div key={item.id} className="min-w-full h-auto">
              <img
                src={item.item}
                alt="image"
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => backToSlide()}
          className="w-9 h-9 bg-white rounded-full absolute top-1/2 left-5  cursor-pointer flex justify-center items-center"
        >
          <IconChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => nextToSilde()}
          className="w-9 h-9 bg-white rounded-full absolute top-1/2 cursor-pointer right-5 flex justify-center items-center"
        >
          <IconChevronRight />
        </button>
      </div>
    </>
  );
};
