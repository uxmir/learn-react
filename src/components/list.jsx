import React from "react";
import Card from "./Card";

const List = () => {
  const cardData = [
    {
      id: 1,
      title: "Font-end development",
      price: 120,
      price_2: 220,
      discount: 50,
    },
    {
      id: 2,
      title: "Font-end development",
      price: 120,
      price_2: 220,
      discount: 50,
    },
    {
      id: 3,
      title: "Font-end development",
      price: 120,
      price_2: 220,
      discount: 50,
    },
  ];
  return (
    <div>
      <div className=" mt-5">
        {cardData.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cardData.map((item, index) => (
                <div key={index}>
                  <Card data={item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center "> there is no item</div>
        )}
      </div>
    </div>
  );
};
export default List;
