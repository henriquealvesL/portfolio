"use client";

import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { WritingEffect } from "@/components/WritingEffect";

import me from "../assets/images/me.jpg";

import {
  AboutContainer,
  AboutTechs,
  AboutText,
  Subtitle,
  Container,
  DescriptionContainer,
  Header,
  ImageDiv,
  PortfolioContainer,
} from "./pageStyle";

export default function Home() {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <main>
        <DescriptionContainer>
          <WritingEffect textValue="Olá! Eu sou o Henrique e sou desenvolvedor full-stack!" />
          <ImageDiv>
            <Image
              src={me}
              width={300}
              height={300}
              alt="Me"
              className="image-me"
            />
          </ImageDiv>
        </DescriptionContainer>
        <Subtitle>Sobre mim</Subtitle>
        <AboutContainer>
          <AboutText>
            Profissional formando em Ciência da Computação e, além da faculdade,
            foco meus estudos em cursos online para me aprofundar cada vez mais
            na minha área. Atuo como Desenvolvedor Web na área do Front-End,
            utilizando das tecnologias JavaScript, TypeScript, React, NextJS,
            NodeJS, etc.
          </AboutText>
          <Subtitle>Tecnologias</Subtitle>
          <AboutTechs>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              width={60}
              height={60}
              alt="JavaScript logo"
            ></Image>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              width={60}
              height={60}
              alt="TypeScript logo"
            ></Image>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width={60}
              height={60}
              alt="React logo"
            ></Image>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              width={60}
              height={60}
              alt="NextJS logo"
            ></Image>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              width={60}
              height={60}
              alt="NodeJS  logo"
            ></Image>
          </AboutTechs>
        </AboutContainer>

        <Subtitle>Portfólio</Subtitle>
        <PortfolioContainer></PortfolioContainer>
      </main>
    </Container>
  );
}
