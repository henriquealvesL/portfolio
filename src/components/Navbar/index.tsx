"use client";

import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import Link from "next-intl/link";

import { Container, Logo, NavBurger, NavItem, NavLinks } from "./styles";

import menu from "@/assets/icons/menu.svg";
import brazil from "@/assets/icons/br.svg";
import usa from "@/assets/icons/usa.svg";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const t = useTranslations("home");

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
      <Logo>
        <LinkScroll to="init" {...scrollConfig}>
          {"<HenriqueAlves/>"}
        </LinkScroll>
      </Logo>
      <NavLinks isOpen={isNavbarOpen}>
        <NavItem>
          <LinkScroll
            to="init"
            onClick={handleCloseMenu}
            className="nav-link"
            {...scrollConfig}
          >
            {`<${t("home")}/>`}
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="about"
            onClick={handleCloseMenu}
            className="nav-link"
            {...scrollConfig}
          >
            {`<${t("about")}/>`}
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="techs"
            onClick={handleCloseMenu}
            className="nav-link"
            {...scrollConfig}
          >
            {`<${t("technologies")}/>`}
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="projects"
            onClick={handleCloseMenu}
            className="nav-link"
          >
            {`<${t("projects")}/>`}
          </LinkScroll>
        </NavItem>
        <NavItem>
          <LinkScroll
            to="contact"
            onClick={handleCloseMenu}
            className="nav-link"
          >
            {`<${t("contact")}/>`}
          </LinkScroll>
        </NavItem>
        <NavItem>
          <Link href="/" locale="pt">
            <Image src={brazil} alt="Brazil Flag" width={40} height={40} />
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" locale="en">
            <Image src={usa} alt="United States Flag" width={40} height={40} />
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
