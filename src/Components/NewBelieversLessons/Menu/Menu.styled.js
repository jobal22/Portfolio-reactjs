import styled from "styled-components";

export const StyledMenu = styled.nav`
  @media screen {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    background: #e8ebed;
    transform: ${({ open }) =>
      open ? "translateX(-100)" : "translateX(-110%)"};
    height: 100vh;
    margin: 0 40px 40px 0;
    text-align: left;
    padding: 10px;
    padding-top: 140px;
    position: absolute;
    top: 0;
    left: 0;
    // border-radius: 5px;
    border: 0.5px solid #b0b8b4ff;
    transition: transform 0.3s ease-in-out;
    // width: 250px;

    h2 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 26px;
      padding: 0 18px;
      margin-top: 2px;
      margin-bottom: 40px;
    }

    p {
      padding: 0 18px;
    }

    a {
      font-family: Arial, Helvetica, sans-serif;
      // margin-bottom: 40px;
      font-size: 2rem;
      // text-transform: uppercase;
      padding: 15px;
      // font-weight: bold;
      letter-spacing: 0.1rem;
      color: #2e455d;
      text-decoration: none;
      transition: color 0.3s linear;
      :focus {
        outline: none !important;
      }
      &:hover {
        // text-decoration: underline;
        border: none;
        border-radius: 10px;
        box-shadow: 5px 5px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px 5px rgba(0, 0, 0, 0.06);
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 100vh;
  }
`;
