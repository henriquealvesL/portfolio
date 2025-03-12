"use client";

import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { WritingEffect } from "@/components/WritingEffect";
import { Fade } from "react-awesome-reveal";

import JavascriptPlainIcon from "react-devicons/javascript/plain";
import TypescriptPlainIcon from "react-devicons/typescript/plain";
import ReactOriginalIcon from "react-devicons/react/original";
import NextjsOriginalWordmarkIcon from "react-devicons/nextjs/original-wordmark";
import NodejsOriginalWordmarkIcon from "react-devicons/nodejs/original-wordmark";
import GithubOriginalIcon from "react-devicons/github/original";

import me from "../assets/images/me.jpg";
import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";

import {
  AboutContainer,
  AboutTechs,
  AboutText,
  Subtitle,
  DescriptionContainer,
  Header,
  ImageDiv,
  ContactContainer,
  ContactMethod,
  ContactIcon,
} from "./pageStyle";

import PortfolioProjects from "@/components/PortfolioProjects";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
            <JavascriptPlainIcon size="60px" />
            <TypescriptPlainIcon size="60px" />
            <ReactOriginalIcon size="60px" />
            <NextjsOriginalWordmarkIcon size="60px" color="white" />
            <NodejsOriginalWordmarkIcon size="60px" />
          </AboutTechs>
        </AboutContainer>

        <Subtitle name="projects">Projetos</Subtitle>
        <PortfolioProjects />

        <Subtitle name="contact">Contato</Subtitle>

        <Fade direction="up" triggerOnce>
          <ContactContainer>
            <Link href="mailto:henriqueadlima@hotmail.com" target="_blank">
              <ContactMethod>
                <ContactIcon>
                  <Image src={mail} alt="mail icon" />
                </ContactIcon>
                <span>E-mail</span>
                <small>henriqueadlima@hotmail.com</small>
              </ContactMethod>
            </Link>
            <Link href="https://github.com/henriquealvesL" target="_blank">
              <ContactMethod>
                <ContactIcon>
                  <GithubOriginalIcon size="40px" color="#bfb664" />
                </ContactIcon>
                <span>Github</span>
                <small>@henriquealvesL</small>
              </ContactMethod>
            </Link>
            <Link
              href="https://www.linkedin.com/in/henriquealves10/"
              target="_blank"
            >
              <ContactMethod>
                <ContactIcon>
                  <Image src={linkedin} alt="linkedin icon" />
                </ContactIcon>
                <span>LinkedIn</span>
                <small>henriquealves10</small>
              </ContactMethod>
            </Link>
          </ContactContainer>
        </Fade>
      </main>
      <Footer />
    </>
  );
}
