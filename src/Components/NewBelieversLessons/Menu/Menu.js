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
        1.0 Getting Started
      </a>
      <a href="/gospel" tabIndex={tabIndex}>
        1.1 The Gospel
      </a>
      <a href="/testimony" tabIndex={tabIndex}>
        1.2 Testimony
      </a>
      <a href="/assurance" tabIndex={tabIndex}>
        1.3 Assurance of Salvation
      </a>
      <a href="/baptism" tabIndex={tabIndex}>
        1.4 Baptism
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
