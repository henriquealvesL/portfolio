"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Navbar } from "@/components/Navbar";
import { WritingEffect } from "@/components/WritingEffect";
import {
  JavascriptPlainIcon,
  TypescriptPlainIcon,
  ReactOriginalIcon,
  NextjsOriginalWordmarkIcon,
  NodejsOriginalWordmarkIcon,
  GithubOriginalIcon,
  PostgresqlPlainWordmarkIcon,
} from "react-devicons";

import me from "../../assets/images/me.jpg";
import linkedin from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/mail.svg";

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
} from "../pageStyle";

import PortfolioProjects from "@/components/PortfolioProjects";
import Footer from "@/components/Footer";
import Link from "next/link";

const Fade = require("react-reveal/Fade");

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <main style={{ marginTop: "80px" }}>
        <DescriptionContainer name="init">
          <WritingEffect textValue={t("hello")} />
          <ImageDiv>
            <Image
              src={me}
              width={300}
              height={300}
              alt="Me"
              className="image-me"
              priority={true}
            />
          </ImageDiv>
        </DescriptionContainer>

        <Subtitle name="about">{t("aboutMe")}</Subtitle>
        <AboutContainer>
          <AboutText>{t("aboutTextOne")}</AboutText>
          <AboutText>{t("aboutTextTwo")}</AboutText>
          <AboutText>{t("aboutTextThree")}</AboutText>
          <AboutText>{t("aboutTextFour")}</AboutText>

          <Subtitle name="techs">{t("technologies")}</Subtitle>
          <AboutTechs>
            <JavascriptPlainIcon size="60px" />
            <TypescriptPlainIcon size="60px" />
            <ReactOriginalIcon size="60px" />
            <NextjsOriginalWordmarkIcon size="60px" color="white" />
            <NodejsOriginalWordmarkIcon size="60px" />
            <PostgresqlPlainWordmarkIcon size="60px" />
          </AboutTechs>
        </AboutContainer>

        <Subtitle name="projects">{t("projects")}</Subtitle>
        <PortfolioProjects />

        <Subtitle name="contact">{t("contact")}</Subtitle>

        <Fade bottom cascade>
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
            <Link href="https://github.com/Samborka" target="_blank">
              <ContactMethod>
                <ContactIcon>
                  <GithubOriginalIcon size="40px" color="#bfb664" />
                </ContactIcon>
                <span>Github</span>
                <small>@samborka</small>
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
