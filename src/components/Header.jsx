import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

export default function Header() {
  return (
    //https://dev.to/yunweneric/implementing-react-routes-part-2-link-vs-navlink-5d6e
    <>
      <Nav>
        <NavLink to="/">
          <h1>BEST OF BANGTAN</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search By Title</NavLink>
          <NavLink to="/songs/new">Submit Your Favorite</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
