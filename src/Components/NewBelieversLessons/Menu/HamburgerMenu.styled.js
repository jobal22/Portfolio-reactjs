import styled from "styled-components";

export const StyledBurger = styled.button`
  position: fixed;
  top: 15%;
  left: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 3.5rem;
  height: 4rem;
  background: rgb(224, 202, 191);
  border: none;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  :focus {
    outline: none !important;
  }

  span {
    width: 2rem;
    height: 0.2rem;
    margin: 2px 0;
    left: 0.75rem;
    background: black;
    border-radius: 10px;
    border: 0.5px solid #2e455d;
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
  // @media screen and (max-width: 767px) {
  //   left: 2rem;
  // }
`;
