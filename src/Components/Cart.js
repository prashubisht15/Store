import React from 'react'
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';

const Cart = (prodlist)=>{
    const [item, setItem] = useState(prodlist);
    return(
        <>
           <section className="main-cart-section">
                <h1>Shopping Cart</h1>

            <div className="cart-items">
                <div className='cart-items-container'>
                    <Scrollbars>
                        {
                            item.map((curItem)=>{
                                return <Items key={curItem.id} {...curItem}/>
                            })
                        }
                    </Scrollbars>
                </div>
            </div>
        </section> 
        </>
    )
}