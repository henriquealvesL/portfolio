"use client";

import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { WritingEffect } from "@/components/WritingEffect";

import me from "../assets/images/me.jpg";

import {
  AboutContainer,
  AboutTechs,
  AboutText,
  AboutTitle,
  Container,
  DescriptionContainer,
  Header,
  ImageDiv,
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
        <AboutTitle>Sobre mim</AboutTitle>
        <AboutContainer>
          <AboutText>
            Profissional formando em Ciência da Computação e, além da faculdade,
            foco meus estudos em cursos online para me aprofundar cada vez mais
            na minha área. Atuo como Desenvolvedor Web na área do Front-End,
            utilizando das tecnologias JavaScript e React.
          </AboutText>
          <AboutTechs>teste</AboutTechs>
        </AboutContainer>
      </main>
    </Container>
  );
}
