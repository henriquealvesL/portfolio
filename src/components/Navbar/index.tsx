"use client";

import { useState } from "react";
import Link from "next/link";

import { Container, Logo, NavBurger, NavItem, NavLinks } from "./styles";
import menu from "@/assets/icons/menu.svg";
import Image from "next/image";

export function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleCloseMenu = () => {
    setIsNavbarOpen(false);
  };

  return (
    <Container>
      <Logo href="#">{"<HenriqueAlves/>"}</Logo>
      <NavLinks isOpen={isNavbarOpen}>
        <NavItem>
          <Link href="#" onClick={handleCloseMenu} className="nav-link">
            {"<Home/>"}
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#" onClick={handleCloseMenu} className="nav-link">
            {"<Sobre/>"}
          </Link>
        </NavItem>
        <NavItem>
          <Link href="#" onClick={handleCloseMenu} className="nav-link">
            {"<Portfólio/>"}
          </Link>
        </NavItem>
      </NavLinks>
      <NavBurger onClick={handleToggleNavbar}>
        <Image
          src={menu}
          width={25}
          height={25}
          className="material-symbols-outlined"
          alt="menu"
        ></Image>
      </NavBurger>
    </Container>
  );
}
