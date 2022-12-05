import React from 'react'
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';


const Cart = ({cart1})=>{
    console.log('cart page',cart1)
    
    return(
        <>
           <section className="main-cart-section">
                <h1>Shopping Cart</h1>

            <div className="cart-items">
                <div className='cart-items-container'>
                    <Scrollbars>
                        {
                            cart1.map((curItem)=>{
                                    console.log('curITm',curItem)
                                return <Items key={curItem.id} itemObj={curItem} qty={}/>
                            })
                        }
                    </Scrollbars>
                </div>
            </div>
        </section> 
        </>
    )
}
export default Cart
