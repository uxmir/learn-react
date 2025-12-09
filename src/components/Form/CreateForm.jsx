import React, { useState } from 'react'

const CreateForm = () => {
   const [formData,setFormData]=useState({
    product_name:'',
    product_category:'',
    price:'',
    price_2:'',
    discount:'',
   }) 
   const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
   }
   const handleSubmit=(e)=>{
    e.preventDefault()
   }
  return (
    <div className='px-6 mt-2'>
        <form onSubmit={handleSubmit}>
        <label >Product name</label>
        <input 
        type="text"
        placeholder='type here' 
        name='name'
        value={formData.product_name}
        onChange={handleChange}
        className='border-2'
        />
        <button type='submit'></button>
        </form>
   
    </div>
  )
}

export default CreateForm