import React from 'react'
import './Header.css'
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
} from "@mui/icons-material";
// import Cart from './Cart'

const Header = () => {  
  let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = "/checkout"; 
    navigate(path);
  }
  return (
    <header className='header'>
      <div id='logo'>
        <h2>TeeRex Store</h2>
      </div>
      <Button
            color="primary"
            variant="contained"
            startIcon={<ShoppingCart />}
            id="cart-icon"
            onClick={() => {routeChange()}
          }
        >
          Cart
      </Button>
      {/* <span id='cart-icon'>
        cart Icon
      </span> */}
    </header>
  )
}

export default Header
