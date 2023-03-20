import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './features/home';
import MyNavbar from './app/MyNavbar';
import { useDispatch } from 'react-redux';
import { getProduct } from './features/product/productSlice';
import React from 'react';
import { ProductDetail } from './features/product/ProductDetails';
import './css/site.css';
import Cart from './features/cart/Cart';



function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch(getProduct(data)))
  }, [])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MyNavbar />}>
          <Route index element={<Home />} />
          <Route path='products/:id' element={<ProductDetail />} />
          <Route path='/shopping-cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
