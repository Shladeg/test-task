import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

const Header = props => {
  return (
    <div className="content">
      <header className="header">
        <div className="header__category">
          <NavLink activeClassName="selected" exact to={`/`}>
            Все
          </NavLink>
          <NavLink
            activeClassName="selected"
            to={`/products/otzhimy-dlia-telezhek`}
          >
            Отжимы для тележек
          </NavLink>
          <NavLink
            activeClassName="selected"
            to={`/products/derzhateli-dlia-mopov`}
          >
            Держатели для мопов
          </NavLink>
          <NavLink
            activeClassName="selected"
            to={`/products/komlekty-dlia-uborki`}
          >
            Комплекты для уборки
          </NavLink>
        </div>
        <div className="header__basket">
          <NavLink className="basket" to="/">
            Корзина
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
