import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/experience" tabIndex={tabIndex}>
        Experience
      </a>
      <a href="/projects" tabIndex={tabIndex}>
        Projects
      </a>
      <a href="/contact" tabIndex={tabIndex}>
        Contact
      </a>
      <a href="/help" tabIndex={tabIndex}>
        Help
      </a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
