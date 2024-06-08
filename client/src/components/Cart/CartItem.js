import React from "react";
import { MdClose } from "react-icons/md";
import "./Cart.css";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src="/images/pizza1-img.jpg" alt="" />
        </div>
        <div className="cart-prod-details">
          <span className="name">Margherita</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">₹399</span>
          </div>
        </div>
      </div>
      <div className="cart-product">
        <div className="img-container">
          <img src="images/burger3-img.jpg" alt="" />
        </div>
        <div className="cart-prod-details">
          <span className="name">Vegan Burger</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>2</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>2</span>
            <span>x</span>
            <span className="highlight">₹249</span>
          </div>
        </div>
      </div>
      <div className="cart-product">
        <div className="img-container">
          <img src="/images/pizza4-img.jpg/" alt="" />
        </div>
        <div className="cart-prod-details">
          <span className="name">Original Prosciutto</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>1</span>
            <span>x</span>
            <span className="highlight">₹679</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
