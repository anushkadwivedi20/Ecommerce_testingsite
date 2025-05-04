import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        E-commerce
      </Link>
      <div className="header__location">
        <FaMapMarkerAlt />
        <div className="header__locationText">
          <span>Hello</span>
          <strong>Select your address</strong>
        </div>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search products..."
        />
        <button className="header__searchButton">Search</button>
      </div>
      <div className="flex items-center space-x-6">
        {/* Wrap your signin block in a Link */}
        <Link to="/login" className="hover:underline">
          <div className="header__signin text-right">
            <span className="block text-xs">Hello, Sign in</span>
            <strong className="text-sm">Account & Lists</strong>
          </div>
        </Link>
      </div>

      <div className="header__cart">
        <FaShoppingCart size={20} />
        <span>Cart</span>
      </div>
    </header>
  );
};

export default Header;
