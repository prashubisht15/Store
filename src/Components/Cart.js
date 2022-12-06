import React from "react";
import "./Cart.css";
import Items from "./Items";
import { useState } from "react";
import { useEffect } from "react";

const Cart = ({ cart1 }) => {
  const [displayCart, setDisplayCart] = useState([...cart1]);
  let total = displayCart
    .map((e) => e.price)
    .reduce((prev, curr) => prev + curr, 0);
  const [cartTotal, setCartTotal] = useState(total);
  const [decrement, setDecrement] = useState(0);
  const [increment, setIncrement] = useState(0);

  const handleDelete = (id) => {
    let newData = displayCart.filter((e) => e.id !== id);
    setDisplayCart(newData);
  };

  useEffect(() => {
    setCartTotal(cartTotal - decrement);
  }, [decrement]);
  useEffect(() => {
    setCartTotal(total);
  }, [displayCart]);
  useEffect(() => {
    setCartTotal(cartTotal + increment);
  }, [increment]);

  return (
    <>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>

        <div className="cart-items">
          <div className="cart-items-container">
            {displayCart.map((curItem) => {
              console.log("curITm", curItem);
              return (
                <Items
                  key={curItem.id}
                  itemObj={curItem}
                  setIncrement={setIncrement}
                  setDecrement={setDecrement}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>Rs{cartTotal}</span>
          </h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};
export default Cart;
