"usec client"
import React,{useState} from 'react'
import { IconCamera } from "@tabler/icons-react";
import image from "../../assets/myPic.png";
const InputUser = () => {
 const [profileImage,setProfileImage]=useState(image)   
 const handleImageChange=(e)=>{
    const file=e.target.files[0]
    if(file){
        const reader=new FileReader()
        reader.onloadend=()=>{
        setProfileImage(reader.result)
        }
          reader.readAsDataURL(file)
    }
 }
  return (
    <>
      <div className="mt-5 w-30 h-30 rounded-full bg-gray-200 relative">
        <img
          src={profileImage}
          alt="image"
          className="w-full h-full object-cover rounded-full"
        />
        <div className="absolute bottom-0 right-0 cursor-pointer">
          <label htmlFor="file" className="cursor-pointer">
          <input id="file" type="file" name="file" className="hidden" onChange={handleImageChange}/>
          <div className="w-8 h-8 rounded-full text-white bg-purple-600 flex justify-center items-center">
            <IconCamera size={16} />
          </div>
          </label>
        </div>
      </div>
    </>
  );
};

//usages
export const Input = () => {
  return (
    <>
      <InputUser />
    </>
  );
};
