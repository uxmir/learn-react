import React, { useState } from 'react'
import List from './components/list'
import Container from './components/Container'
import Buttoncomponent from './components/Buttoncomponent'
import Button from './components/Button'
import Modal from './components/Modal'
import Accordion from './components/Accordion'
import Dashboard from './pages/Dashboard'
import CreateForm from './components/Form/CreateForm'
const App = () => {
  const [modal,setModal]=useState('')
  const handleModal=()=>{
    setModal('modal')
  }
    const handleDashboardModal=()=>{
    setModal('dashboard')
  }
  const handlecloseModal=()=>{
    setModal('')
  }
  const accordionData=[
    {
      id:1,
      title:'  What is react component?',
      answer_1:'   Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit excepturi iure quas consequatur nam dicta maximelaborum,',
      answer_2:'   Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit excepturi iure quas consequatur nam dicta maximelaborum,'
    }
  ]
  return (
    <div>
      <Container>
         <div  className=''>
     mir monir
     <List/>
     <Buttoncomponent 
     btnText_2_conatiner={true}
     image_1={true}
     btnText={'mir monir'} 
     btnText_2={'react app'}
     btnTextColor={'text-red-500'}
     />
    </div>
    <div className='flex items-start'>
    <Button event={handleModal} btnValue={'OpenModal'} />
    </div>
    {/*accordion */}
      <div className='mt-5 grid-cols-2'>
     {accordionData.map((item,index)=>(
      <div key={index}>
          <Accordion data={item}/>
      </div>
     ))}
      </div>
      <Dashboard showModal={handleDashboardModal} />
      </Container>
   {
    modal==='modal'?  <Modal closeModal={handlecloseModal}>
      <div>
        mir monir
      </div>
     </Modal>:<div></div>
   },
     {
    modal==='dashboard'?  <Modal closeModal={handlecloseModal}>
      <div>
        <CreateForm/>
      </div>
     </Modal>:<div></div>
   }
    </div>
  )
}
export default App