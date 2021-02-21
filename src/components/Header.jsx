import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
} from "./NavbarElements";

export default function Header({ toggleNav }) {
  return (
    //https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
    //https://dev.to/yunweneric/implementing-react-routes-part-2-link-vs-navlink-5d6e
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <h1>BEST OF BANGTAN</h1>
          </NavLogo>
          <MobileIcon onClick={toggleNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/search">Search By Title</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/songs/new">Submit Your Favorite</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}
