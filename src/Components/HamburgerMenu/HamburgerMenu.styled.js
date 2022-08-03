import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  right: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  :focus {
    outline: none !important;
  }

  span {
    width: 3rem;
    height: 0.2rem;
    background: black;
    border-radius: 10px;
    border: 0.5px solid #0e2c3b;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  // @media screen and (min-width: 1230px) {
  //   display: none;
  // }
`;
