"use client";

import Link from "next/link";
import { useState } from "react";
import CartData from "@data/cart.json";

const ProductItem = ({ item, index, marginBottom, moreType }) => {
  const [cartTotal, setCartTotal] = useState(CartData.total);
  const [quantity, setQuantity] = useState(1);

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
      quantity: quantity,
      price: item.price,
      currency: item.currency,
    };

    // Kiểm tra sản phẩm có tồn tại trong giỏ hàng không
    const existingItem = CartData.items.find(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItem) {
      // Nếu sản phẩm đã có, chỉ tăng số lượng
      existingItem.quantity += quantity;
    } else {
      // Nếu chưa có, thêm sản phẩm mới
      CartData.items.push(newItem);
    }

    // Cập nhật tổng số lượng sản phẩm
    CartData.total += quantity;

    try {
      // Gửi dữ liệu mới đến API
      const response = await fetch("/cart/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(CartData),
      });
  
      if (response.ok) {
        setCartTotal(cartTotal + quantity);
        console.log("Sản phẩm đã được thêm vào giỏ hàng.");
      } else {
        console.error("Có lỗi khi thêm sản phẩm vào giỏ hàng.");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  return (
    <div className={`sb-menu-item sb-mb-${marginBottom}`}>
      <Link href={`/product`} className="sb-cover-frame">
        <img src={item.image} alt={item.title} />
        <div dangerouslySetInnerHTML={{ __html: item.badge }} />
      </Link>
      <div className="sb-card-tp">
        <h4 className="sb-card-title">
          <Link href={`/product`}>{item.title}</Link>
        </h4>
        <div className="sb-price">
          {item.price} <sub>{item.currency}</sub>
        </div>
      </div>
      <div className="sb-description">
        <p className="sb-text sb-mb-15">{item.text}</p>
      </div>
      <div className="sb-card-buttons-frame">
        <a href="#." className="sb-btn sb-atc" onClick={(e) => addToCart(e)}>
          <span className="sb-icon">
            <img src="/img/ui/icons/cart.svg" alt="icon" />
          </span>
          <span className="sb-add-to-cart-text">Add to cart</span>
          <span className="sb-added-text">Added</span>
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
