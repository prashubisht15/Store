import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import "./Cart.css";

const Items = ({ itemObj, setIncrement, setDecrement, handleDelete }) => {
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(1 * itemObj.price);
  console.log("afasdfasdfasdfasfd", total);
  const { enqueueSnackbar } = useSnackbar();
  const handleAdd = () => {
    if (qty < itemObj.quantity) {
      setQty(qty + 1);
      setIncrement(total);
    } else {
      enqueueSnackbar("Cannot be added because of limited stock", {
        variant: "warning",
      });
    }
  };
  const handleMinus = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setDecrement(total);
    }
  };


  useEffect(()=>{
    setTotal(qty*itemObj.price)
  },[qty])
  useEffect(()=>{
      setIncrement(total)
  },[total])
  useEffect(()=>{
      setDecrement(total)
  },[total])

  console.log("item itemObj", itemObj);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={itemObj.imageURL} />
        </div>
        <div className="title">
          <h2>{itemObj.name}</h2>
        </div>
        <div className="add-minus-quantity">
          <i className="fa-solid fa-minus" onClick={handleMinus}></i>
          <input type="text" value={qty} placeholder="0" />
          <i class="fa-solid fa-plus" onClick={handleAdd}></i>
        </div>
        <div className="price">
          <h3>Rs{qty * itemObj.price}</h3>
        </div>
        <div className="remove-item">
          <i
            class="fa-solid fa-trash"
            onClick={() => handleDelete(itemObj.id)}
          ></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
