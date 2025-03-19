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
import DjangoPlainWordmarkIcon from "react-devicons/django/plain-wordmark";
import PythonOriginalIcon from "react-devicons/python/original";
import DockerPlainWordmarkIcon from "react-devicons/docker/plain-wordmark";
import VueIcon from "react-devicons/vuejs/original-wordmark";

import linkedin from "../assets/icons/linkedin.svg";
import mail from "../assets/icons/mail.svg";
import arrow_down from "../assets/icons/arrow_down.svg";

import {
  AboutContainer,
  AboutTechs,
  AboutText,
  Subtitle,
  DescriptionContainer,
  Header,
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
      <main>
        <DescriptionContainer name="init">
          <WritingEffect textValue="Henrique Alves " />
          <Image
            className="arrow-down"
            src={arrow_down}
            alt="arrow down icon"
            width={50}
            height={50}
          />
        </DescriptionContainer>
        <Subtitle name="about">Sobre mim</Subtitle>
        <AboutContainer>
          <AboutText>
            Sou um desenvolvedor <span className="highlight">Full Stack</span>{" "}
            movido pela transformação de ideias em soluções tecnológicas
            funcionais e eficientes.
          </AboutText>
          <AboutText>
            Com expertise em <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">TypeScript</span> e{" "}
            <span className="highlight">Python</span>, construo aplicações
            completas que combinam robustez técnica com experiências de usuário
            excepcionais. Minha jornada profissional me permitiu desenvolver um
            conjunto versátil de habilidades em ambas as frentes do
            desenvolvimento.
          </AboutText>
          <AboutText>
            No <span className="highlight">Front-End</span>, desenvolvo
            interfaces intuitivas e responsivas utilizando{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Next.js</span> e{" "}
            <span className="highlight">Vue.js</span>, sempre priorizando a
            experiência do usuário e as melhores práticas de UI/UX.
          </AboutText>
          <AboutText>
            No <span className="highlight">Back-End</span>, trabalho com{" "}
            <span className="highlight">Django</span>,{" "}
            <span className="highlight">Node.js</span> e{" "}
            <span className="highlight">PostgreSQL</span> para criar
            arquiteturas escaláveis e eficientes. Tenho experiência comprovada
            na implementação de APIs RESTful, microsserviços e otimização de
            bancos de dados que sustentam aplicações de alto desempenho.
          </AboutText>
          <AboutText>
            Automatizo processos com <span className="highlight">CI/CD</span>,
            configuro ambientes Dockerizados e implemento{" "}
            <span className="highlight">testes de integração e unidade</span>,
            garantindo entregas contínuas com qualidade e confiabilidade.
          </AboutText>
          <AboutText>
            O que me diferencia é minha capacidade de enxergar além do código.
            Busco entender profundamente os problemas para desenvolver soluções
            que realmente agreguem valor. Sou movido por desafios e pela
            constante busca por otimização e aprendizado.
          </AboutText>
          <AboutText>
            Estou sempre aberto a novas conexões e oportunidades de colaboração
            em projetos inovadores.{" "}
            <span className="highlight">
              Vamos construir algo incrível juntos?
            </span>
          </AboutText>

          <Subtitle name="techs">Tecnologias</Subtitle>
          <AboutTechs>
            <JavascriptPlainIcon size="60px" />
            <TypescriptPlainIcon size="60px" />
            <ReactOriginalIcon size="60px" />
            <NextjsOriginalWordmarkIcon size="60px" color="white" />
            <VueIcon size="60px" />
            <NodejsOriginalWordmarkIcon size="60px" />
            <PythonOriginalIcon size="60px" />
            <DjangoPlainWordmarkIcon size="60px" />
            <DockerPlainWordmarkIcon size="60px" />
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
