import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div className="home-container">
      <div className="tshirt-container">
        <div>
          <h2>This is home</h2>
          {tshirts.map((tshirt) => (
            <Tshirt key={tshirt._id} tshirt={tshirt}></Tshirt>
          ))}
        </div>
        <div className="cart-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
