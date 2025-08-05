import React, { useState } from 'react'
import Form from './components/form'
import Cards from './components/cards'
import Card from './components/card'

function App() {

const [users,setusers] = useState([{name:"Eren Yeager",image:"https://i.pinimg.com/1200x/15/f0/86/15f0865fe3eec179500d37d2d33ae896.jpg", disc:" The Devil of Paradis"},
  {
    name:"PavitrPrabhakar",
    image:"https://i.pinimg.com/1200x/65/9e/d0/659ed0c5361c029634d0875c42a70174.jpg", 
    disc:"Spider-Man: Earth‑50101"
  }
])


const handleFormSubmitdata = (data)=>{
    setusers([...users,data])
}

const removeCard = (id) => {
  console.log(id);
  setusers(()=>users.filter((items,index)=> index!=id))
}

  return (
    <>
    <div className='h-screen w-full '>
      <Form handleFormSubmit={handleFormSubmitdata}></Form>
      <Cards removeCard={removeCard} users={users}></Cards>      
    </div>   
    </>
  )
}

export default App
