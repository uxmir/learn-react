"use client";
import Heading from "../HeadingComponent/Heading";
import React, { useState } from "react";
import {
  IconCheck,
  IconClock,
  IconFile,
  IconLibraryPhoto,
  IconSearch,
  IconX,
} from "@tabler/icons-react";

function RxInvestigationContainer() {
  const [inputValue, setInputValue] = useState("");
  const [reportItem, setReportItem] = useState([]);
  const [indexValue, setIndexValue] = useState(0);

  // ডামি ডাটা স্টেট (ডিফল্ট ইমেজসহ)
  const [historyData, setHistoryData] = useState([
    {
      name: "Blood Glucose",
      result: "5.6 mmol/L",
      note: "Fasting",
      file: { name: "blood_report_sample.jpg", isDummy: true }, // ডামি ইমেজ অবজেক্ট
    },
    {
      name: "Hemoglobin",
      result: "14 g/dL",
      note: "Normal range",
      file: null,
    },
  ]);

  const addData = [
    { id: 1, data: "CBG" },
    { id: 2, data: "Blood Sugar" },
    { id: 3, data: "HIV" },
    { id: 4, data: "Dayabaties" },
  ];

  const filteredData = () => {
    return addData.filter((item) =>
      item.data.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
    );
  };

  const allData = filteredData();

  const updatedData = (index, feild, value) => {
    const updatedState = [...reportItem];
    updatedState[index][feild] = value;
    setReportItem(updatedState);
  };

  const updatedHistoryData = (index, feild, value) => {
    const updatedState = [...historyData];
    updatedState[index][feild] = value;
    setHistoryData(updatedState);
  };

  const handleRemoveItem = (removeIndex) => {
    const deletedData = reportItem.filter((_, index) => index !== removeIndex);
    setReportItem(deletedData);
  };

  return (
    <>
      <div className="h-[100vh] overflow-y-auto">
        <div className="px-6 mt-6 shadow-md sm:shadow-none sm:mt-0 py-4 flex gap-x-4 items-center">
          <div className="w-9 h-9 rounded bg-[#28629C] text-white flex justify-center items-center">
            <IconClock size={20} />
          </div>
          <div>
            <Heading>Investigation History</Heading>
            <p className="text-sm text-gray-600">
              View Previous Investigations and add new Reports
            </p>
          </div>
        </div>

        <div className="w-full px-6 mt-5 sm:mt-0 h-[82vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side: History & Search */}
          <div className="w-full border border-gray-100">
            <div className="py-3 bg-gray-100">
              <p className="text-lg font-medium text-gray-600 pl-4">
                Previous Investigations
              </p>
            </div>
            <div className="w-full h-[500px] border-b border-gray-100 overflow-y-auto">
              {historyData.length !== 0 ? (
                <div className="flex flex-col gap-y-4 px-4 mt-5">
                  {historyData.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-4 w-full rounded-lg bg-gray-50 border border-gray-100"
                    >
                      <div className="flex items-center gap-x-2 mb-3">
                        <div className="w-9 h-9 rounded bg-[#28629C] text-white flex justify-center items-center">
                          <IconFile size={20} />
                        </div>
                        <p className="text-lg font-medium text-gray-600">
                          {item.name}
                        </p>
                      </div>
                      <input
                        type="text"
                        value={item.result}
                        onChange={(e) =>
                          updatedHistoryData(index, "result", e.target.value)
                        }
                        placeholder="Result/Value"
                        className="py-3 w-full mt-3 text-gray-600 border border-gray-200 rounded-lg bg-gray-50 px-3 outline-none focus:border-amber-500"
                      />
                      <input
                        type="text"
                        value={item.note}
                        onChange={(e) =>
                          updatedHistoryData(index, "note", e.target.value)
                        }
                        placeholder="Note (Optional)"
                        className="py-3 w-full mt-3 text-gray-600 border border-gray-200 rounded-lg bg-gray-50 px-3 outline-none focus:border-amber-500"
                      />
                      {/* History Section File Upload with Dummy Image Support */}
                      <FileUpload
                        file={item.file}
                        index={`history-${index}`}
                        handleChange={(e) =>
                          updatedHistoryData(index, "file", e.target.files[0])
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <div className="flex flex-col items-center">
                    <IconClock size={34} stroke={3} className="text-gray-300" />
                    <div className="text-gray-300 text-center">
                      <p className="font-medium text-base">
                        No Previous Investigations
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="px-4 mt-4">
              <p className="text-lg font-medium text-gray-600">
                Search Investigations
              </p>
              <div className="flex gap-x-2 items-center py-3 px-4 bg-gray-100 rounded-lg mt-1">
                <IconSearch size={16} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search Here....."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full outline-none bg-transparent text-gray-500"
                />
              </div>
              <div className="mt-2 flex flex-col gap-y-1">
                {allData.map((data, idx) => {
                  const isSelected = reportItem.some(
                    (s) => s.name === data.data
                  );
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (!isSelected) {
                          setReportItem([
                            ...reportItem,
                            {
                              name: data.data,
                              result: "",
                              note: "",
                              file: null,
                            },
                          ]);
                        }
                        setInputValue("");
                      }}
                      className={`flex justify-between items-center cursor-pointer p-2 rounded-lg ${
                        isSelected
                          ? "bg-blue-500 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>{data.data}</span>
                      {isSelected && <IconCheck size={18} />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Selected Items */}
          <div className="w-full border border-gray-100">
            <div className="flex items-center gap-x-2 px-4 py-4 border-b bg-gray-50/50">
              <span className="text-gray-600 font-medium text-lg">
                Selected Item
              </span>
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                {reportItem.length}
              </span>
            </div>
            <div className="flex flex-col gap-y-4 px-4 py-4 pb-10">
              {reportItem.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-4 w-full rounded-lg bg-gray-50 border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-x-2">
                      <div className="w-9 h-9 rounded bg-[#28629C] text-white flex justify-center items-center">
                        <IconFile size={20} />
                      </div>
                      <p className="text-lg font-medium text-gray-600">
                        {item.name}
                      </p>
                    </div>
                    <IconX
                      onClick={() => handleRemoveItem(index)}
                      size={18}
                      className="text-gray-600 cursor-pointer"
                    />
                  </div>
                  <input
                    type="text"
                    value={item.result}
                    onChange={(e) =>
                      updatedData(index, "result", e.target.value)
                    }
                    placeholder="Result/Value"
                    className="py-3 w-full mt-3 text-gray-600 border border-gray-200 rounded-lg bg-white px-3 outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => updatedData(index, "note", e.target.value)}
                    placeholder="Note (Optional)"
                    className="py-3 w-full mt-3 text-gray-600 border border-gray-200 rounded-lg bg-white px-3 outline-none focus:border-amber-500"
                  />
                  <FileUpload
                    file={item.file}
                    index={`new-${index}`}
                    handleChange={(e) =>
                      updatedData(index, "file", e.target.files[0])
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-2 flex px-6 py-4 items-center gap-x-4 justify-end">
          <button className="px-4 py-2 border border-red-600 text-red-600 rounded-md font-medium">
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#28629C] text-white rounded-md font-medium">
            Save Change
          </button>
        </div>
      </div>
    </>
  );
}

function FileUpload({ file, handleChange, index }) {
  const uniqueId = `file-upload-${index}`;
  return (
    <div className="px-3 py-3 mt-3 flex max-[410px]:flex-col flex-row gap-4 justify-between items-center border border-gray-200 rounded-lg bg-gray-50">
      <div className="flex items-center gap-x-2 overflow-hidden">
        <IconLibraryPhoto className="text-gray-600 shrink-0" />
        <span className="text-gray-500 font-medium truncate">
          {file ? file.name : "Attach Report Image"}
        </span>
      </div>
      <label
        htmlFor={uniqueId}
        className="cursor-pointer max-[410px]:w-full min-w-[100px] text-center px-3 py-2 rounded bg-sky-200 text-sky-600 text-sm font-semibold transition-all hover:bg-sky-300"
      >
        <span>{file ? "Change" : "Upload"}</span>
        <input
          type="file"
          id={uniqueId}
          className="hidden"
          onChange={handleChange}
          accept="image/*"
        />
      </label>
    </div>
  );
}

export default RxInvestigationContainer;
