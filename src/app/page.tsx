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
      <main style={{ marginTop: "80px" }}>
        <DescriptionContainer name="init">
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
        <Subtitle name="about">Sobre mim</Subtitle>
        <AboutContainer>
          <AboutText>
            Sou um desenvolvedor Full Stack com conhecimento e experiência nas
            seguintes tecnologias: JavaScript, TypeScript, React, NextJS e
            NodeJS. Tenho desenvolvido projetos nos quais pude aplicar essas
            tecnologias de forma prática e eficiente.
          </AboutText>
          <AboutText>
            No Front-End, sou especializado no desenvolvimento de interfaces
            utilizando JavaScript e TypeScript. Utilizo frameworks como React e
            NextJS para criar aplicações modernas e escaláveis, proporcionando
            uma ótima experiência do usuário.
          </AboutText>
          <AboutText>
            No Back-End, trabalho com NodeJS para construir APIs eficientes,
            utilizando as melhores práticas de desenvolvimento e arquitetura.
            Tenho experiência na criação de servidores, integração com bancos de
            dados e implementação de lógica de negócios.
          </AboutText>
          <AboutText>
            Se você está em busca de um desenvolvedor Full Stack versátil,
            comprometido e apaixonado por tecnologia, estou pronto para
            enfrentar novos desafios e colaborar em projetos inovadores. Vamos
            juntos construir soluções incríveis!
          </AboutText>
          <Subtitle name="techs">Tecnologias</Subtitle>
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

        <Subtitle name="portfolio">Portfólio</Subtitle>
        <PortfolioContainer></PortfolioContainer>
      </main>
    </Container>
  );
}
