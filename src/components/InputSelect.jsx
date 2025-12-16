"use client";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";

const SelectInput = ({selectData}) => {
  const [optionsContainer, setOptionsContainer] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="mt-5">
      <div className="relative w-[400px]">
        <div className="flex flex-col gap-y-1 relative">
          <label htmlFor="" className="text-gray-600">
            Select An Option
          </label>
          <input
            type="text"
            placeholder="Select Here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setOptionsContainer(!optionsContainer)}
            onBlur={()=>setOptionsContainer(false)}
            className="w-full py-2 px-3 border rounded-lg text-gray-600 border-gray-300 outline-none focus:outline-none focus:border-amber-500 placeholder:text-gray-600"
          />
          <IconChevronDown
            className={`absolute right-3 top-9 transition-all duration-500 text-gray-600 ${
              optionsContainer === true ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {optionsContainer === true && (
          <div className="w-full bg-white shadow-lg flex flex-col gap-y-1 rounded-lg py-3 px-3 absolute top-18">
            {selectData?.map((data, index) => (
              <div
                onMouseDown={() => {
                  setOptionsContainer(false);
                  setInputValue(data.data);
                }}
                key={index}
                className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                <span>{data.data}</span>
                {inputValue === data.data && <IconCheck />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SelectInput;

//usages

      <SelectInput
      selectData={[
            {
      id: 1,
      data: "item 1",
    },
    {
      id: 2,
      data: "item 2",
    },
    {
      id: 3,
      data: "item 3",
    },
      ]}
      />
