import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import "./App.css";
import Home from './pages/home';
import NotFound from './pages/notfound';
import Cart from './pages/cart/cart';
import { useState } from 'react';



function App() {

  const [cartItems, setCartItems] = useState([]);
  const [cartitemcount, setCartItemCount] = useState(0);




// handleCart
  const handleOnCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { name: item.product_name, price: item.price, image: item.image, description: item.description, _id: item._id },
    ]);
    setCartItemCount((prevCount) => (prevCount + 1));
     
    let cartcountSerialized = JSON.stringify(cartitemcount)
    let cartitemsSerialized = JSON.stringify(cartItems)
    
    localStorage.setItem("mycartcount" , cartcountSerialized)
     localStorage.setItem("mycartitems" ,  cartitemsSerialized)


   
     
    }

    




 // handleOnClear 
  


const handleOnBring = () => {
  let cartitemstorage = JSON.parse(localStorage.getItem("mycartitems"))
  let cartcountstorage = JSON.parse(localStorage.getItem("mycartcount"))
  setCartItemCount(cartcountstorage);
  setCartItems(cartitemstorage);
}


  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Home  cartitemcount= {cartitemcount}  handleOnCart= {handleOnCart} />}
          />
          <Route path='/home' element={<Home  handleOnCart={handleOnCart} cartitemcount= {cartitemcount} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems = {setCartItems} setCartItemCount = {setCartItemCount} handleOnBring = {handleOnBring}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;