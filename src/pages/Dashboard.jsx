import React, { useContext, useEffect, useState } from "react";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import { ProductContext } from "../store/ProductProvider/productProvider";
import Modal from '../components/Modal'
import Button from "../components/Button";
import Status from "../components/status";
const Dashboard = ({showModal}) => {
//for fetching api    
const {products}=useContext(ProductContext)
  return (
    <div className="mt-10">
        <div className="flex justify-end">
        <Button event={showModal} btnValue={'create'} />
        </div>
      <div className="mt-3 h-[100vh]">
        <table className="w-full">
          <thead className="w-full">
            <tr className="w-full text-lg text-gray-700 font-semibold">
              <th className="py-3 ">Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {products.map((data, index) => (
              <tr
                key={index}
                className={`w-full  text-center capitalize text-md  text-gray-600 font-semibold
                    ${index%2===0?'bg-gray-200':'bg-gray-50'}`}
              >
                <td className="py-3">{data.product_name}</td>
                <td className="py-3">{data.product_category}</td>
                <td className="py-3">
                  <div className="flex gap-2 items-center justify-center">
                    <span>{data.price}</span>{" "}
                    <span className="text-sm line-through">{data.price_2}</span>
                  </div>
                </td>
                <td className="py-3">{data.discount}</td>
                <td class="px-4">
                  <div class="flex gap-2 items-center justify-center">
                    <IconEdit class="w-6 h-6 text-blue-400" />
                    <IconTrash class="w-6 h-6 text-red-400" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
     <Status/>
      </div>
    </div>
    
  )
 
};

export default Dashboard;
