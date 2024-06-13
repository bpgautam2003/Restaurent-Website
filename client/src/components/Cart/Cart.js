import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem";
import "./Cart.css";
import Cdata from "./Cdata";

const Cart = ({ setShowCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let ctotal = 0;
    Cdata.map((data) => {
      return ctotal = ctotal + (data.price * data.quantity);
    })
    setTotal(ctotal);

  }, [])


  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        <CartItem />
        <div className="cart-footer">
          <div className="subtotal">
            <div className="text">Subtotal:</div>
            <div className="text total">₹{total}</div>
          </div>
          <div className="button">
            <button className="checkout-cta">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
