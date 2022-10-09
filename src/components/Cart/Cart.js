import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  //conditional rendering with if else
  let message;
  if (cart.length === 0) {
    message = <p className="cart"> Buy at least one item !!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div className="cart">
        <p>Thanks for buying one item!!!</p>
        <p>Look further for another item !!!</p>
      </div>
    );
  } else {
    message = <p className="cart"> Thanks for buying more !!!</p>;
  }
  return (
    <div>
      <h2 className={cart.length === 5 ? `orange-cart` : `blue-cart`}>
        This is Cart. Order summary
      </h2>

      <p
        className={` items ${cart.length === 6 ? `green-cart` : `purple-cart`}`}
      >
        Selected Items: {cart.length}
      </p>
      {cart.map((product) => (
        <div className="cart" key={product._id}>
          {product.name}
          <button
            className="cart-btn"
            onClick={() => handleRemoveItem(product)}
          >
            X
          </button>
        </div>
      ))}

      {/* Conditional rendering with ternary */}
      {cart.length < 3 ? (
        <p className="cart">Buy three item for Ratul</p>
      ) : (
        <p className="cart">Don't buy number forth item.</p>
      )}
      {cart.length === 4 && (
        <p className="cart">You just buy number forth item with && operator.</p>
      )}
    </div>
  );
};

export default Cart;
