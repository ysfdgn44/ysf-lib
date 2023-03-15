import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuIcon } from "../../helper/iconData";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setCurrentUser(false);
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">clarus library</Logo>
      <Hamburger onClick={() => setShowMenu(!showMenu)}>{menuIcon}</Hamburger>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">home</MenuLink>
        <MenuLink to="/about">About</MenuLink>

        {currentUser ? (
          <MenuLink to="/logout" onClick={logout}>
            logout
          </MenuLink>
        ) : (
          <>
            <MenuLink to="/register">register</MenuLink>
            <MenuLink to="/login">login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
