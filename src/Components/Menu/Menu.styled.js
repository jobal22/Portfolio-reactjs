import styled from "styled-components";

export const StyledMenu = styled.nav`
  @media screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fafafa;
    transform: ${({ open }) =>
      open ? "translateY(-100)" : "translateY(-100%)"};
    height: 300px;
    text-align: center;
    padding: 10px;
    padding-top: 45px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 10px;
    border: 0.5px solid #1d4062;
    transition: transform 0.3s ease-in-out;
    width: 250px;

    a {
      font-family: Times, serif;
      // margin-bottom: 40px;
      font-size: 2rem;
      text-transform: uppercase;
      padding: 15px;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: #1d4062;
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
  // @media screen and (min-width: 1230px) {
  //   display: flex;
  //   justify-content: center;
  //   text-align: right;
  //   padding: 10px;
  //   padding-right: 200px;
  //   padding-top: 30px;
  //   position: absolute;
  //   top: 0;
  //   right: 60px;
  //   border-radius: 10px;
  //   width: 20vh;

  //   a {
  //     font-size: 18px;
  //     text-transform: uppercase;
  //     padding: 20px;
  //     font-weight: bold;
  //     letter-spacing: 0.5rem;
  //     color: black;
  //     text-decoration: none;
  //     margin-right: 60px;
  //     transition: color 0.3s linear;
  //     :focus {
  //       outline: none !important;
  //     }
  //     &:hover {
  //       border: none;
  //       border-radius: 10px;
  //       box-shadow: 5px 5px 6px -1px rgba(0,0,0,.1), 0 2px 4px 5px rgba(0,0,0,.06);
  //     }
  //   }
  // }
`;
