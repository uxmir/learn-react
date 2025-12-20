import React, { useEffect } from "react";

const ScrollView = () => {
  const scrollSection = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
  ];
  //storingColor
  const bgColor = {
    1: "bg-green-600",
    2: "bg-orange-600",
    3: "bg-yellow-600",
    4: "bg-blue-600",
    5: "bg-purple-600",
  };
//for scrolling y section
  const scrollFunction = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const scrollTop=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }
  return (
    <div className="">
      <div className="flex gap-x-5 my-10">
        {scrollSection.map((item) => (
          <span
            key={item.id}
            onClick={() => scrollFunction(item.id)}
            className={`px-6 py-3 text-2xl cursor-pointer text-white font-bold ${
              bgColor[item.id]
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
      {scrollSection.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className={`max-w-[800px] mt-20  text-center flex items-center justify-center mx-auto h-100 rounded-2xl  ${
            bgColor[item.id]
          }`}
        >
          <span className="text-6xl text-white">{item.text}</span>
        </div>
      ))}

      <div onClick={scrollTop} className="px-3 py-5 bg-green-600 text-white text-center mt-2 cursor-pointer">
       ScrollToTop
      </div>
    </div>
  );
};

export default ScrollView;
