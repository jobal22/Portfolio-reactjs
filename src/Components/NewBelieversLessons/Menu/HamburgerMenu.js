import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./HamburgerMenu.styled";

const HamburgerMenu = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

HamburgerMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default HamburgerMenu;
