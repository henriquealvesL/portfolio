import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-right: 32px;
`;

export const NavItem = styled.li`
  margin-left: 10px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #BFB664;

  &:hover {
    text-decoration: underline;
  }
`;
