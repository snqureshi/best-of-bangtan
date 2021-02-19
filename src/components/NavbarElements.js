import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
//https://styled-components.com/docs/basics#coming-from-css

export const Nav = styled.nav`
  background: rgb(39, 38, 64);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10;
`;
export const NavLink = styled(Link)`
  color: #e0fbfc;
  background: rgb(39, 38, 64);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #e0fbfc;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.8 rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
