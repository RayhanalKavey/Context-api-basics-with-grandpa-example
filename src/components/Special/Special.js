import React, { useContext, useState } from "react";
import { WatchContext } from "../Grandpa/Grandpa";
const Special = ({ ring }) => {
  const [house, setHouse] = useContext(WatchContext);

  // console.log(house);
  return (
    <div>
      <h4>Special</h4>
      <p>Ring: {ring}</p>
      <button onClick={() => setHouse(house + 1)}>Increase House</button>
    </div>
  );
};

export default Special;
