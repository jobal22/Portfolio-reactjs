import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import Dropdown from "./Dropdown.js";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        Home
      </a>
      <a href="/verse" tabIndex={tabIndex}>
        Verses
      </a>
      <a href="/about" tabIndex={tabIndex}>
        About the Author
      </a>
      {/* <Dropdown /> */}
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
