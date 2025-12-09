import React from 'react'
import PropTypes from 'prop-types'
import viteLogo from '../assets/react.svg'
const Buttoncomponent = ({btnText,btnText_2,btnText_2_conatiner,image_1,btnTextColor}) => {
  return (
    <div className='text-4xl font-bold mt-10'>
      <div className='flex items-center gap-2'>
     {
        btnText_2_conatiner && (
        <div>
         {btnText_2}
        </div>
        )
     }
     <div className={`font-extrabold ${btnTextColor}`}>
         {btnText}
     </div>
      </div>
     {
      image_1 &&(
      <img src={viteLogo} alt="" />
      )
     }
    </div>
  )
}
Buttoncomponent.PropTypes={
btnText:PropTypes.string,    
btnText_2:PropTypes.string,
btnText_2_conatiner:PropTypes.bool,
image_1:PropTypes.bool,
btnTextColor:PropTypes.string
}
Buttoncomponent.defaultProps={
 btnText_2_conatiner:false,
 image_1:false,
 btnTextColor:'text-black'
}
export default Buttoncomponent