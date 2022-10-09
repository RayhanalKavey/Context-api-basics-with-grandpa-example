import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house, ring }) => {
  return (
    <div>
      <h4>My Self</h4>
      <p>House:{house}</p>
      <section>
        <Special ring={ring}></Special>
      </section>
    </div>
  );
};

export default MySelf;
