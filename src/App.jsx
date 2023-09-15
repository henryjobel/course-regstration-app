import Header from './Components/Header/Header'
import './App.css'
import Cards from './Components/Cards/Cards';
import Carts from './Components/Carts/Carts';
import { useState } from 'react';
function App() {
  const [allSeletedCarts,setAllSelectedCarts] = useState([]);
  const  handelAddToCard = card => {
    const alreadyExist = allSeletedCarts.find(item => item.id === card.id)
    if(alreadyExist){
     return alert("all ready add");
    }
    else{
      const newSelectedCarts = [...allSeletedCarts,card]
    
      setAllSelectedCarts(newSelectedCarts)
    }
   
    
  }
  return (
    <>  
    
    <Header></Header>
    <div className='flex'>
      <Cards handelAddToCard={handelAddToCard}></Cards>
      <Carts allSeletedCarts={allSeletedCarts}></Carts>
    </div>
    </>
  )
}

export default App
