import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const WatchContext = createContext("Gold Watch");
export const MoneyContext = createContext(555);

const Grandpa = () => {
  // const house = 7;
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(555);
  const ring = "Diamond ring";
  return (
    // <WatchContext.Provider value={"Silver ring"}>
    <WatchContext.Provider value={[house, setHouse]}>
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2>Grandpa</h2>
          <p>House:{house}</p>

          <section className="flex">
            <Father house={house} ring={ring}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </MoneyContext.Provider>
    </WatchContext.Provider>
  );
};

export default Grandpa;