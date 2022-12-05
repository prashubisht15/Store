import './App.css';
import { BrowserRouter as Router,Route,Link,useHistory, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard'
import Cart from './Components/Cart'
import { useState } from 'react';

function App() {
  const [cart1, setCart1] = useState([])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<DashBoard setCart1={setCart1}/>}/>
          <Route path="/checkout" element={<Cart cart1={cart1}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
