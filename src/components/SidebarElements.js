import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

//Only show if sidebar is toggled true
////https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
//https://www.youtube.com/watch?v=Nl54MJDR2p8&t=0s

export const SidebarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? "100%" : "0%")};
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: #f72585;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-columns: repeat (4, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-conter: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-family: "Poiret One";
  text-align: center;

  &:hover {
    color: #f72585;
    font-size: 1.8rem;
    transition: 0.2s ease-in-out;
  }
`;
