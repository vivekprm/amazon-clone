import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header___optionLineOne">Hello Guest</span>
          <span className="header___optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header___optionLineOne">Returns</span>
          <span className="header___optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header___optionLineOne">Your</span>
          <span className="header___optionLineTwo">Prime</span>
        </div>
        <Link to="checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header___optionLineTwo header__basketCount">
              {/* Optional chaining. Handles basket undefined */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
