import React,{ useState } from 'react'
import { useSnackbar } from "notistack";
import './Cart.css'

const Items = ({itemObj}) => {
    const [qty,setQty] = useState(1)
    const { enqueueSnackbar } = useSnackbar();

    const handleAdd=() =>{
        if(qty < itemObj.quantity)
            setQty(qty+1)
        else{
            enqueueSnackbar("Cannot be added because of limited stock", {variant:"warning"});
        }
    }
    const handleMinus=() =>{
        if(qty>0)
            setQty(qty-1)
    }
   
    console.log('item itemObj', itemObj)
    return (
        <>
            <div className="items-info">
                <div className="product-img">
                    <img src={itemObj.imageURL}/>
                </div>
                <div className='title'>
                    <h2>{itemObj.name}</h2>
                </div>
                <div className="add-minus-quantity">
                    <i className="fa-solid fa-minus" onClick={handleMinus}></i>
                    <input type="text" value={qty} placeholder='0' />
                    <i class="fa-solid fa-plus" onClick={handleAdd}></i>
                </div>
                <div className='price'>
                    <h3>Rs{qty*itemObj.price}</h3>
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
