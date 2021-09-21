import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Cart from './components/Cart';
import Basket from './components/Basket';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const data = {
  products: [
    {
      id: '1',
      name: 'Cotton Tshirt',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
      price: '250',
      aprice: '300',
      image: 'https://res.cloudinary.com/dhfpcwwq0/image/upload/v1631965522/project/isolated-t-shirt-1852114_640_uoahej.png'
    },
    {
      id: '2',
      name: 'White Tshirt',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
      price: '550',
      aprice: '600',
      image: 'https://res.cloudinary.com/dhfpcwwq0/image/upload/v1631965522/project/blank-1976334_640_fcceae.png'
    },
    {
      id: '3',
      name: 'Full Sleeve Tshirt',
      desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
      price: '200',
      aprice: '350',
      image: 'https://res.cloudinary.com/dhfpcwwq0/image/upload/v1631965522/project/isolated-t-shirt-1852113_640_dli2zx.png'
    }
  ]
}

function App() {
  const [cartItems, setCartItems]= useState([]);
  const [products] = useState(data);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove =(product)=>{
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty=== 1){
      setCartItems(cartItems.filter((x)=> x.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((x)=>
        x.id === product.id ? {...exist, qty: exist.qty-1}:x
        )
      );
    }
  };
  return (
    <Router>
      <div className="App"> 
        <Switch>
          <Route path="/basket">
            <Header
              countCartItems={cartItems.length} />
            <Basket cartItems={cartItems} 
            onAdd={onAdd}
            onRemove={onRemove}/>
          </Route>
          <Route path="/">
            <Header
               countCartItems={cartItems.length}/>
            <Cart
              products={products}
              onAdd={onAdd} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
