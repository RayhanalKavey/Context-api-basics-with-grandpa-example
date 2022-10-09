import React, { useContext } from "react";
import { WatchContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const [house, setHouse] = useContext(WatchContext);
  return (
    <div>
      <h4>Friend</h4>
      <button onClick={() => setHouse(house - 1)}>Decrease House</button>
    </div>
  );
};

export default Friend;
