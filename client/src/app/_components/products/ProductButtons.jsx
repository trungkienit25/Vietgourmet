"use client";

import { useState, useEffect } from "react";
import CartData from "@data/cart.json";

const ProductButtons = ({ item }) => {
  const [cartTotal, setCartTotal] = useState(CartData.total);
  const [quantity, setQuantity] = useState(1);
  const minQuantity = 1;
  const maxQuantity = 10;

  useEffect(() => {
    const cartNumberEl = document.querySelector('.sb-cart-number');
    cartNumberEl.innerHTML = cartTotal;
  }, [cartTotal]);

  const addToCart = async (e) => {
    e.preventDefault();
    const cartNumberEl = document.querySelector('.sb-cart-number');
    setCartTotal(cartTotal + quantity);
  
    cartNumberEl.classList.add('sb-added');
    e.currentTarget.classList.add('sb-added');
  
    setTimeout(() => {
      cartNumberEl.classList.remove('sb-added');
    }, 600);
  
    const newItem = {
      title: item.title,
      image: item.image,
      description: item.description,
      price: item.price,
      currency: item.currency,
      rating: item.rating, // Thêm rating nếu có
      text: item.text,     // Thêm text nếu có
    };
  
    try {
      // Gửi dữ liệu sản phẩm và số lượng đến API
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: newItem,
          quantity: quantity,
        }),
      });
  
      if (response.ok) {
        console.log("Sản phẩm đã được thêm vào giỏ hàng.");
      } else {
        console.error("Có lỗi khi thêm sản phẩm vào giỏ hàng.");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
  

  return (
    <>
      <div className="sb-buttons-frame">
        <div className="sb-input-number-frame">
          <div className="sb-input-number-btn sb-sub" onClick={() => setQuantity(quantity > minQuantity ? quantity - 1 : quantity)}>-</div>
          <input type="number" readOnly value={quantity} min={minQuantity} max={maxQuantity} />
          <div className="sb-input-number-btn sb-add" onClick={() => setQuantity(quantity < maxQuantity ? quantity + 1 : quantity)}>+</div>
        </div>
        {/* button */}
        <a href="#." className="sb-btn sb-atc" onClick={(e) => addToCart(e)}>
          <span className="sb-icon">
            <img src="/img/ui/icons/cart.svg" alt="icon" />
          </span>
          <span className="sb-add-to-cart-text">Add to cart</span>
          <span className="sb-added-text">Added</span>
        </a>
        {/* button end */}
      </div>
    </>
  );
};

export default ProductButtons;
