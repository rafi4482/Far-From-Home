import React from "react";

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list and you have packed {numPacked} (
        {packedPercentage}%){" "}
      </em>
    </footer>
  );
};

export default Footer;
