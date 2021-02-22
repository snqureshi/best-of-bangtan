import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
//https://styled-components.com/docs/basics#coming-from-css
//https://www.w3schools.com/cssref/pr_pos_z-index.asp

export const Nav = styled.nav`
  background: rgb(39, 38, 64);
  height: 80px;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  padding: 1rem;
  z-index: 10;

  @media screen and (max-width: 420px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding= 0 24px;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  font-family: "Abril Fatface", cursive;
  color: #c8e7ff;
  text-shadow: 2px 2px 5px #f72585;
  padding: 5px 10px;
  display: flex;
  justify-self: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 420px) {
    display: flex;
    postion: fixed;
    top: 15px;
    right: 20px;
    transform: translate (-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } ;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  justify-self: flex-end;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #c8e7ff;
  background: rgb(39, 38, 64);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Yeseva One", cursive;
  font-weight: 500;

  &:hover {
    color: #f72585;
    border-bottom: 1px solid white;
    font-size: 1.2rem;
    transition: 0.2s ease-in-out;
  }
`;
