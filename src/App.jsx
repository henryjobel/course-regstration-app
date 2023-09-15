import Header from './Components/Header/Header'
import './App.css'
import Cards from './Components/Cards/Cards';
import Carts from './Components/Carts/Carts';
import { useState } from 'react';
function App() {
  const [allSeletedCarts,setAllSelectedCarts] = useState([]);
  const [remaining,setRemaining] = useState(0);

  const [credit,setTotalCredit] = useState(0);

  const  handelAddToCard = (card) => {
    const alreadyExist = allSeletedCarts.find(item => item.id === card.id)
    let count = card.reading_time

    if(alreadyExist){
     return alert("all ready add");
    }
    else{
      allSeletedCarts.forEach((item)=>{
        count += item.reading_time;
        
      })
      
      const remainingToltal = 20 - count;
      if(count > 20){
        return alert("it no possible to Add Credit hour")
      }
      else{
        const newSelectedCarts = [...allSeletedCarts,card]
    
      setAllSelectedCarts(newSelectedCarts);
      setRemaining(remainingToltal);
      setTotalCredit(count);
      }
    }
   
    
  }
  return (
    <>  
    
    <Header></Header>
    <div className='flex'>
      <Cards handelAddToCard={handelAddToCard}></Cards>
      <Carts allSeletedCarts={allSeletedCarts} remaining={remaining} credit={credit}></Carts>
    </div>
    </>
  )
}

export default App
