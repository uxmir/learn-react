import { IconChevronDown } from "@tabler/icons-react";
import PropTypes from "prop-types";
import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [accordion, setAccordion] = useState(false);
  const handleItem = () => {
    setAccordion(!accordion);
  };
  return (
    <div>
      <div
        onClick={handleItem}
        className="border border-gray-300 bg-gray-50 rounded-3xl py-3 px-4"
      >
        <div className="w-full flex justify-between items-center">
          <span className="text-2xl font-semibold text-gray-700">
            {data.title}
          </span>
          <IconChevronDown
            className={`cursor-pointer transition-all duration-500 ${
              accordion === false ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
        {accordion && (
          <ul className="list-disc pl-10 mt-4">
            <li className="text-gray-600 pb-2">{data.answer_1}</li>
            <li className="text-gray-600 pb-2">{data.answer_2}</li>
          </ul>
        )}
      </div>
    </div>
  );
};
Accordion.PropTypes = {
  data: PropTypes.array.isRequired,
};
export default Accordion;
