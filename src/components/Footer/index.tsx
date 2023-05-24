import Link from "next/link";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <span>
        Desenvolvidor por{" "}
        <Link href="" target="_blank">
          Henrique.
        </Link>
      </span>
    </Container>
  );
}
