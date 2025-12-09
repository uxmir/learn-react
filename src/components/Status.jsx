import React from "react";
const Status = () => {
  const statusData = [
    { id: 1, data: "completed" },
    { id: 2, data: "pending" },
    { id: 3, data: "inprogress" },
    { id: 4, data: "cancelled" },
  ];
  //storing color as a object
  const colors = {
    color_1: "bg-green-200 text-green-600",
    color_2: "bg-purple-200 text-purple-600",
    color_3: "bg-blue-200 text-blue-600",
    color_4: "bg-red-200 text-red-600",
  };
  const colorApply = {
    completed: colors.color_1,
    pending: colors.color_2,
    inprogress: colors.color_3,
    cancelled: colors.color_4,
  };
  return (
    <div>
      {statusData.map((data, index) => (
        <span
          className={`px-3 py-2 font-medium ml-5  ${
            data.data ? `${colorApply[data.data]}` : ""
          }`}
          key={index}
        >
          {data.data}
        </span>
      ))}
    </div>
  );
};

export default Status;
