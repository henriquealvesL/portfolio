import {
  Container,
  PortfolioProject,
  ProjectDescription,
  ProjectLinksContainer,
} from "./styles";

import Link from "next/link";
import Image from "next/image";
const Fade = require("react-reveal/Fade");

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
import { useTranslations } from "next-intl";

export default function PortfolioProjects() {
  const t = useTranslations("home");

  return (
    <Container>
      <PortfolioProject>
        <Fade left>
          <Image
            src={myContacts}
            alt="MyContacts project"
            width={500}
            height={315}
          />
        </Fade>
        <Fade right>
          <ProjectDescription>
            <h3>MyContacts</h3>
            <p>{t("myContactsDescription")}</p>
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
        <Fade right>
          <Image src={ignews} alt="Ignews project" width={500} height={315} />
        </Fade>
        <Fade left>
          <ProjectDescription>
            <h3>Ignews</h3>
            <p>{t("ignewsDescription")}</p>
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
        <Fade left>
          <Image src={dtmoney} alt="DTMoney project" width={500} height={315} />
        </Fade>

        <Fade right>
          <ProjectDescription>
            <h3>DTMoney</h3>
            <p>{t("dtmoneyDescription")}</p>
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
