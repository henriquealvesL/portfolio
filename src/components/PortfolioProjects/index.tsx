import {
  Container,
  PortfolioProject,
  ProjectDescription,
  ProjectLinksContainer,
} from "./styles";

import Link from "next/link";
import Image from "next/image";

import { Fade } from "react-awesome-reveal";
import {
  JavascriptPlainIcon,
  TypescriptPlainIcon,
  ReactOriginalIcon,
  NextjsOriginalWordmarkIcon,
  NodejsOriginalWordmarkIcon,
  GithubOriginalIcon,
  PostgresqlPlainWordmarkIcon,
} from "react-devicons";

import myContacts from "../../assets/images/my-contacts.png";
import ignews from "../../assets/images/ignews.png";
import dtmoney from "../../assets/images/dtmoney.png";
import prismic from "../../assets/icons/prismic.svg";
import fauna from "../../assets/icons/fauna.svg";
import site from "../../assets/icons/site.svg";

export default function PortfolioProjects() {
  return (
    <Container>
      <PortfolioProject>
        <Fade direction="left" triggerOnce>
          <Image
            src={myContacts}
            alt="MyContacts project"
            width={500}
            height={315}
          />
        </Fade>
        <Fade direction="right" triggerOnce>
          <ProjectDescription>
            <h3>MyContacts</h3>
            <p>
              O sistema desenvolvido em React e Node é uma aplicação que permite
              aos usuários criar, editar e remover contatos. Utilizando a
              biblioteca React para o frontend e o ambiente de tempo de execução
              Node.js para o backend, a aplicação oferece uma interface
              interativa para gerenciar informações de contatos, como nome,
              número de telefone e endereço de e-mail. Os usuários podem
              adicionar novos contatos, atualizar informações existentes e
              remover contatos indesejados.
            </p>
            <div className="used-techs">
              <ReactOriginalIcon size="40px" />
              <JavascriptPlainIcon size="40px" />
              <NodejsOriginalWordmarkIcon size="50px" />
              <PostgresqlPlainWordmarkIcon size="40px" />
            </div>
            <ProjectLinksContainer>
              <Link
                href="https://github.com/Samborka/MyContacts_frontend"
                target="_blank"
              >
                <GithubOriginalIcon size="32px" color="#bfb664" />
                <span>Frontend code</span>
              </Link>
              <Link
                href="https://github.com/Samborka/MyContacts_api"
                target="_blank"
              >
                <GithubOriginalIcon size="32px" color="#bfb664" />
                <span>API code</span>
              </Link>
            </ProjectLinksContainer>
          </ProjectDescription>
        </Fade>
      </PortfolioProject>

      <PortfolioProject className="second-project">
        <Fade direction="right" triggerOnce>
          <Image src={ignews} alt="Ignews project" width={500} height={315} />
        </Fade>
        <Fade direction="left" triggerOnce>
          <ProjectDescription>
            <h3>Ignews</h3>
            <p>
              O projeto ig.news é um blog que oferece conteúdo exclusivo aos
              usuários com base no status de assinatura. Os usuários podem
              acessar as postagens completas do blog após realizar o pagamento e
              ativar sua assinatura por meio do sistema integrado com o STRIPE.
              Aqueles que optarem por não assinar terão acesso limitado ao
              conteúdo das postagens. Todas as informações necessárias para
              verificar assinaturas e dados dos usuários são armazenadas no
              banco de dados FaunaDB.
            </p>
            <div className="used-techs">
              <NextjsOriginalWordmarkIcon size="50px" color="white" />
              <TypescriptPlainIcon size="40px" />
              <Image src={prismic} alt="Prismic Logo" width={30} height={30} />
              <Image src={fauna} alt="Fauna Logo" width={30} height={30} />
            </div>
            <ProjectLinksContainer>
              <Link href="https://github.com/Samborka/Ignews" target="_blank">
                <GithubOriginalIcon size="32px" color="#bfb664" />
                <span>Code</span>
              </Link>
            </ProjectLinksContainer>
          </ProjectDescription>
        </Fade>
      </PortfolioProject>

      <PortfolioProject>
        <Fade direction="left" triggerOnce>
          <Image src={dtmoney} alt="DTMoney project" width={500} height={315} />
        </Fade>

        <Fade direction="right" triggerOnce>
          <ProjectDescription>
            <h3>DTMoney</h3>
            <p>
              A plataforma de gerenciamento financeiro desenvolvida com React e
              TypeScript oferece uma solução eficiente para controlar suas
              finanças. Com ela, você pode adicionar novos saldos, registrar
              suas despesas e ter um controle completo do seu fluxo de caixa. A
              interface intuitiva e amigável torna a experiência de gerenciar
              suas finanças simples e organizada, permitindo que você tome
              decisões informadas sobre seus gastos e economias.
            </p>
            <div className="used-techs">
              <ReactOriginalIcon size="40px" />
              <TypescriptPlainIcon size="40px" />
            </div>
            <ProjectLinksContainer>
              <Link
                href="https://dtmoney-rocketseat-taupe.vercel.app/"
                target="_blank"
              >
                <Image src={site} alt="Site Logo" width={30} height={30} />
                <span>Dtmoney</span>
              </Link>
              <Link
                href="https://github.com/Samborka/dtmoney-rocketseat"
                target="_blank"
              >
                <GithubOriginalIcon size="32px" color="#bfb664" />
                <span>Code</span>
              </Link>
            </ProjectLinksContainer>
          </ProjectDescription>
        </Fade>
      </PortfolioProject>
    </Container>
  );
}
