import styled from 'styled-components';

export const StyledMenu = styled.nav`
@media screen and (max-width: 1229px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => open ? 'translateX(-100)' : 'translateX(100%)'};
  height: 380px;
  text-align: center;
  padding: 10px;
  padding-top: 45px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  border: 1px solid black;
  transition: transform 0.3s ease-in-out;
  width: 199.4px;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 15px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    :focus {
      outline: none !important;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
  @media screen and (min-width: 1230px) {
    display: flex;
    justify-content: center;
    text-align: right;
    padding: 10px;
    padding-right: 230px;
    padding-top: 33px;
    position: absolute;
    top: 0;
    right: 60px;
    border-radius: 10px;
    width: 20vh;

    a {
      font-size: 18px;
      text-transform: uppercase;
      padding: 20px;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
      :focus {
        outline: none !important;
      }
      &:hover {
        border: 1px solid black;
        border-radius: 10px;
      }
    }
  }

`;