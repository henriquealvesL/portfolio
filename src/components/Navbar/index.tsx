"use client";

import { Container, Logo, NavItem, NavLink, NavLinks } from "./styles";

export function Navbar() {
  return (
    <Container>
      <Logo href="#">{"<HenriqueAlves/>"}</Logo>
      <NavLinks>
        <NavItem>
          <NavLink href="#">{"<Home/>"}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">{"<Sobre/>"}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">{"<Portfólio/>"}</NavLink>
        </NavItem>
      </NavLinks>
    </Container>
  );
}
