import styled from "styled-components";

export const StyledMenu = styled.nav`
  h1 {
    color: white;
    padding-left: 20px;
    text-decoration: underline;
  }

  h2 {
    font-size: 17px;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 10px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    background-color: transparent;
    transition: color 0.3s linear;
    :focus {
      outline: none !important;
    }
    &:hover {
      color: #bfb391;
      cursor: pointer;
    }
  }

  .dropdown {
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 7px;
  }

  .dropdown-content {
    // display: none;
    position: block;
    top: 60px;
    margin-left: 30px;
    background-color: transparent;
    width: 300px;
    border-radius: 7px;
    border: 1px solid #bfb391;
    z-index: 1;
  }

  .dropdown-content p {
    color: white;
    font-weight: bold;
    padding: 5px 7px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  // @media screen and (min-width: 1230px) {
  //   margin-bottom: 250px;
  // }
`;
