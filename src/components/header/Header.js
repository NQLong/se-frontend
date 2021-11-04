import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import {
  DownOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons"; 

function Header(props) {

  return (
    <div className="header">
      <section id="menu">
        <div className="logo">
          <span>
            <Link to="/"> RESTAURENT </Link>
          </span>
        </div>
        <div className="search">
          <form>
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm ..."
            ></input>
            <SearchOutlined></SearchOutlined>
          </form>
        </div>
        <ul className="menu-list" id={'' ? "hidden" : ""}>
          <li className="active">
            <Link to="/"> Trang Chủ </Link>
          </li>
          <li>
            <Link to="/product"> Món ăn </Link>
          </li>
          {'' ? (
            <li >
              <Link>
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>
              {'' ? (
                <div className="menu-drop">
                  {'' ? <Link to="/admin">Admin</Link> : ""}
                  <Link to="/myOrder">Đơn hàng</Link>
                  <Link>Đăng xuất</Link>
                </div>
              ) : (
                ""
              )}
            </li>
          ) : (
            <li>
              <Link>
                Tài khoản
                <DownOutlined style={{ fontSize: "14px" }} />
              </Link>

              {'' ? (
                <div className="menu-drop">
                  <Link to="register">Đăng kí</Link>
                  <Link to="login">Đăng nhập</Link>
                </div>
              ) : (
                ""
              )}
            </li>
          )}
          <li className="shop-cart">
            <Link to="/cart" className="shop-cart">
              <ShoppingCartOutlined
                style={{ fontSize: "30px" }}
              ></ShoppingCartOutlined>
              <span className="count"> </span>
            </Link>
          </li>
        </ul>
        <div className="bar" >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </section>
    </div>
  );
}

export default Header;
