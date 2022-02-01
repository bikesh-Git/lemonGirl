import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import SignIn from './pages/Login'
import Cart from './pages/Cart'
import Success from './pages/Success'
import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import { useSelector } from 'react-redux'


function App() {
  
  const user = useSelector(state=>state.user.currentUser)
  return (    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:catagory" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
       
        <Route path="register" 
        element={user ? <Navigate to ="/"/> :<Register />} />
       
        <Route path="login" 
        element={user? <Navigate to ="/"/> :<Login />} />
        
        <Route path="signin" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
