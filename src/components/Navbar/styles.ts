import styled from "styled-components";

interface MenuProps{
  isOpen: boolean;
}

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Logo = styled.a`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

export const NavLinks = styled.ul<MenuProps>`
  display: flex;
  list-style: none;
  margin-right: 32px;

  @media screen and (max-width: 768px) {
  background: #212121;
  border: 1px solid #282c34;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 8px;
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;

  .nav-link {
    &:hover {
      text-decoration: underline;
    }
  }
}
`;

export const NavItem = styled.li`
  margin-left: 10px;

  .nav-link {
    text-decoration: none;
    font-size: 24px;
    color: #bfb664;

    &:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export const NavBurger = styled.button`
  display: none;
  background-color: transparent;
  border: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
