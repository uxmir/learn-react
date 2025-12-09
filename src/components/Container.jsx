import React from 'react'

 const Container = ({children}) => {
  return (
    <div>
        <div className='max-w-[1320px] mx-auto px-5 xl:px-0'>
        {children}
        </div>
        </div>
  )
}
 export default Container