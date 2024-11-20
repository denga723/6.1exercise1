import React from "react";

const Navbar = ({ items }) => (
  <nav>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
