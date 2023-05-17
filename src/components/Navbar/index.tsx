"use client";

import { useState } from "react";
import { Link } from "react-scroll";

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

  const scrollConfig = {
    duration: 100, // duração da animação em milissegundos
    smooth: true, // rolagem suave ativada
    offset: -100, // compensação do deslocamento em relação ao topo da seção
  };

  return (
    <Container>
      <Logo href="init">{"<HenriqueAlves/>"}</Logo>
      <NavLinks isOpen={isNavbarOpen}>
        <NavItem>
          <Link
            to="init"
            onClick={handleCloseMenu}
            className="nav-link"
            {...scrollConfig}
          >
            {"<Home/>"}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="about"
            onClick={handleCloseMenu}
            className="nav-link"
            {...scrollConfig}
          >
            {"<Sobre/>"}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="techs"
            onClick={handleCloseMenu}
            className="nav-link"
            {...scrollConfig}
          >
            {"<Tecnologias/>"}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="portfolio" onClick={handleCloseMenu} className="nav-link">
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
