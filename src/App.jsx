import Header from './Components/Header/Header'
import './App.css'
import Cards from './Components/Cards/Cards';
import Carts from './Components/Carts/Carts';

function App() {
  

  return (
    <>  
    
    <Header></Header>
    <div className='flex'>
      <Cards></Cards>
      <Carts></Carts>
    </div>
    </>
  )
}

export default App
