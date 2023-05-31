import Link from "next/link";
import { Container } from "./styles";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("home");
  return (
    <Container>
      <span>
        {t("footerMessage")}{" "}
        <Link href="" target="_blank">
          Henrique.
        </Link>
      </span>
    </Container>
  );
}
