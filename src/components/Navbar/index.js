import React from "react";
import Logo from "../logo";
import { LogoContainer, NavbarContainer } from "./styles";

const Navbar = ({ children }) => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {children}
    </NavbarContainer>
  );
};

export default Navbar;
