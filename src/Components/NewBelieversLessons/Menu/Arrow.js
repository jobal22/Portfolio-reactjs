import React from "react";
import { bool, func } from "prop-types";
import { StyledArrow } from "./Arrow.styled";

const Arrow = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;
  return (
    <StyledArrow
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledArrow>
  );
};

Arrow.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Arrow;
