"use client";

import { ExperienciaItem } from "@/components/ExperienceItem";
import { Section, Container } from "./styles";

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

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  techs: string[];
}

const experiences: ExperienceProps[] = [
  {
    title: "Estagiário de Desenvolvimento Full Stack",
    company: "OnSign TV",
    period: "Abr 2024 - Mar 2025",
    description: [
      "Realizei a manutenção contínua de um sistema de gerenciamento de telas para sinalização digital, utilizado por mais de 80 mil telas e milhares de usuários, focando na correção de bugs e aprimoramento da estabilidade.",
      "Atuei na análise e resolução de falhas em produção, garantindo a confiabilidade e o desempenho do sistema.",
      "Utilizei Vue.js no front-end e Python/Django no back-end, além de trabalhar com PostgreSQL para gerenciamento de dados.",
    ],
    techs: [
      "javascript",
      "typescript",
      "vue",
      "jquery",
      "python",
      "django",
      "postgresql",
      "graphql",
      "go",
    ],
  },
  {
    title: "Estagiário de Desenvolvimento Full Stack",
    company: "Khomp",
    period: "Jan 2022 - Mar 2024",
    description: [
      "Implementei uma automação de CI/CD para testes de integração, utilizando Pytest, Docker e scripts Bash, garantindo a validação automatizada das funcionalidades essenciais do sistema. Essa solução aumentou a confiabilidade do código e reduziu falhas em produção.",
      "Desenvolvi e mantive novas funcionalidades para o Flow, um sistema de roteamento e classificação de chamadas SIP voltado para Contact Centers, utilizando JavaScript, PHP e C++.",
      "Atuei na identificação e correção de falhas no sistema, garantindo maior estabilidade e eficiência no processamento de chamadas.",
      "Testes de software e hardware, montagem de cenários para validação de funcionamento e resolução de problemas de clientes.",
      "Colaborei na melhoria da infraestrutura do projeto, utilizando Docker e pipelines de CI/CD para otimizar o fluxo de desenvolvimento e implantação.",
    ],
    techs: ["javascript", "python", "php", "cpp", "sqlite", "jquery", "docker"],
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Laboratório de Pesquisa Aplicada",
    period: "Jul 2022 - Fev 2023",
    description: [
      "Desenvolvi e mantive a interface web de um sistema para estufas inteligentes, permitindo o controle remoto e a configuração automatizada da estrutura por meio de uma aplicação intuitiva e responsiva.",
      "Atuei como responsável pelo Front-end do projeto, utilizando TypeScript, React e CSS para garantir uma experiência de usuário eficiente e moderna.",
      "Integrei a aplicação com o banco de dados MongoDB, garantindo a comunicação fluida entre o front-end e o back-end para o armazenamento e gerenciamento de dados das estufas.",
      "Implementei melhorias na usabilidade e design do sistema, aprimorando a experiência do usuário e facilitando a configuração dos parâmetros automatizados.",
    ],
    techs: ["javascript", "typescript", "react", "mongo"],
  },
];

export default function Experiencia() {
  return (
    <Section id="experiencia">
      <Container>
        <div style={{ marginTop: "2rem" }}>
          {experiences.map((exp, index) => (
            <ExperienciaItem key={index} experience={exp} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
