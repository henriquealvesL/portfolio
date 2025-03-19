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

import expand_down from "@/assets/icons/expand-down.svg";
import expand_up from "@/assets/icons/expand-up.svg";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  techs: any[];
}

export function ExperienciaItem({
  experience,
}: {
  experience: ExperienceProps;
}) {
  const [expanded, setExpanded] = useState(false);

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
              {experience.techs.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </TechContainer>
          </TechSection>
        </ExpandedContent>
      )}
    </ExperienceCard>
  );
}
