import React from "react";
import "./style.css";

export const Footer = (props) => {
  return (
    <footer className="text-center fixed-bottom footer">
      <div className="card-footer">
        <small className="text-black mx-auto">
          &copy; CCYA 2020 • All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
export default Footer;