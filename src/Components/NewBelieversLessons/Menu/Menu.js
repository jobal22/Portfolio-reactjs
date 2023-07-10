import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <p>Module 1</p>
      <h2>New Believers Module</h2>
      <a href="/gettingstarted" tabIndex={tabIndex}>
        1.1 Getting Started
      </a>
      <a href="/gospel" tabIndex={tabIndex}>
        1.2 The Gospel
      </a>
      <a href="/testimony" tabIndex={tabIndex}>
        1.3 Testimony
      </a>
      <a href="/assurance" tabIndex={tabIndex}>
        1.4 Assurance of Salvation
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
