import React from "react";

const Tshirt = ({ tshirt }) => {
  const { picture, name } = tshirt;
  return (
    <div>
      <h2>Name: {name} </h2>
      <img src={picture} alt="" />
    </div>
  );
};

export default Tshirt;
