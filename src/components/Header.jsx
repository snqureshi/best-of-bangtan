import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

export default function Header() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>BEST OF BANGTAN</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search By Title
          </NavLink>
          <NavLink to="/songs/new" activeStyle>
            Submit Your Favorite
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
