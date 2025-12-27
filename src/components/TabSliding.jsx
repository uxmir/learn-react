import React, { useState } from "react";

const TabScroll = () => {
  const [tab, setTab] = useState(1);
  const tabItem = [
    { id: 1, text: "Tab 1" },
    { id: 2, text: "Tab 2" },
    { id: 3, text: "Tab 3" },
    { id: 4, text: "Tab 4" },
  ];

  return (
    <div className="p-10">
      {/* Tabs Menu */}
      <div className="flex gap-x-6 mb-5">
        {tabItem.map((item) => (
          <div
            onClick={() => setTab(item.id)}
            key={item.id}
            className={`text-2xl cursor-pointer font-bold ${
              tab === item.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
            }`}
          >
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Slider Container */}
      <div className="w-[700px] overflow-hidden border rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(tab - 1) * 100}%)` }}
        >
          {/* Slide Items */}
          <div className="min-w-full bg-green-600 h-40 flex items-center justify-center text-white text-3xl">Content 1</div>
          <div className="min-w-full bg-red-600 h-40 flex items-center justify-center text-white text-3xl">Content 2</div>
          <div className="min-w-full bg-orange-600 h-40 flex items-center justify-center text-white text-3xl">Content 3</div>
          <div className="min-w-full bg-purple-600 h-40 flex items-center justify-center text-white text-3xl">Content 4</div>
        </div>
      </div>
    </div>
  );
};
export default TabScroll;
