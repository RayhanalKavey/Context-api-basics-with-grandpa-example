import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tshirt) => {
    const exist = cart.find((product) => product._id === tshirt._id);
    if (exist) {
      alert("Already exists.");
    } else {
      const newCart = [...cart, tshirt];

      setCart(newCart);
    }
  };
  const handleRemoveItem = (item) => {
    // console.log("clicked", item);
    const cartAfterRemove = cart.filter((product) => product._id !== item._id);
    setCart(cartAfterRemove);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            handleAddToCart={handleAddToCart}
            key={tshirt._id}
            tshirt={tshirt}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
