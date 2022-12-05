import React from 'react'
import './Cart.css'
const Items = (props) => {
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <p>image</p>
                </div>
                <div className='title'>
                    <h>Samsung</h>
                </div>
                <div className="add-minus-quantity">
                    <i class="fa-solid fa-minus"></i>
                    <input type="text" placeholder='0' />
                    <i class="fa-solid fa-plus"></i>
                </div>
                <div className='price'>
                    <h3>2000rs</h3>
                </div>
                <div className='remove-item'>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Items
