import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
//https://styled-components.com/docs/basics#coming-from-css
//https://www.w3schools.com/cssref/pr_pos_z-index.asp

export const Nav = styled.nav`
  background: rgb(39, 38, 64);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 1rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index:1;
  width= 100%;
  padding= 0 24px;
  max-width=1100px;
`;

export const NavLogo = styled(Link)`
  color: #c8e7ff;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #b4b8ee;
  background: rgb(39, 38, 64);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #c8e7ff;
  }
`;
