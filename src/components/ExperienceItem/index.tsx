"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ExperienceCard,
  CardHeader,
  HeaderContent,
  JobTitle,
  CompanyInfo,
  ToggleButton,
  ExpandedContent,
  DescriptionList,
  DescriptionItem,
  TechSection,
  TechTitle,
  TechContainer,
  TechBadge,
} from "./styles";

import JavascriptPlainIcon from "react-devicons/javascript/plain";
import TypescriptPlainIcon from "react-devicons/typescript/plain";
import ReactOriginalIcon from "react-devicons/react/original";
import DjangoPlainWordmarkIcon from "react-devicons/django/plain-wordmark";
import PythonOriginalIcon from "react-devicons/python/original";
import DockerPlainWordmarkIcon from "react-devicons/docker/plain-wordmark";
import PostgresqlPlainWordmarkIcon from "react-devicons/postgresql/plain-wordmark";
import VuejsOriginalWordmarkIcon from "react-devicons/vuejs/original-wordmark";
import GraphQLIcon from "react-devicons/graphql/plain-wordmark";
import GoIcon from "react-devicons/go/original-wordmark";
import SQLiteIcon from "react-devicons/sqlite/original-wordmark";
import JQueryIcon from "react-devicons/jquery/plain-wordmark";
import PhpOriginalIcon from "react-devicons/php/plain";
import CppIcon from "react-devicons/cplusplus/original";
import MongoDBIcon from "react-devicons/mongodb/plain-wordmark";

import expand_down from "@/assets/icons/expand-down.svg";
import expand_up from "@/assets/icons/expand-up.svg";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  techs: string[];
}

export function ExperienciaItem({
  experience,
}: {
  experience: ExperienceProps;
}) {
  const [expanded, setExpanded] = useState(false);

  type IconComponent = React.ComponentType<{ size: number }>;

  const techIconMap: Record<string, IconComponent> = {
    javascript: JavascriptPlainIcon,
    typescript: TypescriptPlainIcon,
    react: ReactOriginalIcon,
    docker: DockerPlainWordmarkIcon,
    sqlite: SQLiteIcon,
    php: PhpOriginalIcon,
    cpp: CppIcon,
    mongo: MongoDBIcon,
    vue: VuejsOriginalWordmarkIcon,
    jquery: JQueryIcon,
    python: PythonOriginalIcon,
    django: DjangoPlainWordmarkIcon,
    postgresql: PostgresqlPlainWordmarkIcon,
    graphql: GraphQLIcon,
    go: GoIcon,
  };

  return (
    <ExperienceCard>
      <CardHeader onClick={() => setExpanded(!expanded)}>
        <HeaderContent>
          <JobTitle>{experience.title}</JobTitle>
          <CompanyInfo>
            {experience.company} | {experience.period}
          </CompanyInfo>
        </HeaderContent>
        <ToggleButton
          aria-label={expanded ? "Recolher detalhes" : "Expandir detalhes"}
        >
          {expanded ? (
            <Image src={expand_up} alt="arrow down" height={30} width={30} />
          ) : (
            <Image src={expand_down} alt="arrow down" height={30} width={30} />
          )}
        </ToggleButton>
      </CardHeader>

      {expanded && (
        <ExpandedContent>
          <DescriptionList>
            {experience.description.map((item, index) => (
              <DescriptionItem key={index}>{item}</DescriptionItem>
            ))}
          </DescriptionList>
          <TechSection>
            <TechTitle>Tecnologias:</TechTitle>
            <TechContainer>
              {experience.techs.map((tech, index) => {
                const Icon = techIconMap[tech];
                return (
                  <TechBadge key={index}>
                    <Icon size={40} />
                  </TechBadge>
                );
              })}
            </TechContainer>
          </TechSection>
        </ExpandedContent>
      )}
    </ExperienceCard>
  );
}
