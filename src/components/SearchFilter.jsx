"use client";
import { IconArrowUpRight } from "@tabler/icons-react";
import React, { useState } from "react";
const SearchFilter = () => {
  const [searchContainer, setSearchContainer] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchData = [
    { id: 1, data: "Mir Moniruzzaman" },
    { id: 2, data: "UX/UI Designer" },
    { id: 3, data: "Front-end Developer" },
    { id: 4, data: "Mir Moniruzzaman" },
    { id: 5, data: "UX/UI Designer" },
    { id: 6, data: "Front-end Developer" },
  ];
  const filteredData = () => {
    return searchData
      .filter((item) =>
        item.data
          .toLowerCase()
          .trim()
          .includes(searchValue.toLowerCase().trim())
      )
      .slice(0, 3);
  };
  const allSearchData = filteredData();
  return (
    <div>
      <div className="w-[500px] mt-5 relative">
        <input
          type="text"
          name=""
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Here"
          onFocus={() => setSearchContainer(true)}
          onBlur={() => setSearchContainer(false)}
          className="py-2 w-full text-gray-600 outline-none focus:outline-none px-3 rounded-lg border border-gray-300 focus:border-amber-600 "
        />
        {searchContainer === true && (
          <div className="w-full px-2 py-4 bg-white shadow-2xl absolute top-13 flex  flex-col ">
            {allSearchData?.map((data, index) => (
              <div
                key={index}
                onMouseDown={() => {
                  setSearchValue(data.data);
                  setSearchContainer(false);
                }}
                className="text-gray-600 capitalize flex justify-between items-center py-2 px-2 rounded  cursor-pointer hover:bg-blue-600 hover:text-white"
              >
                <span>{data.data}</span>
                <IconArrowUpRight />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
