import Link from "next/link";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <span>
        Desenvolvido por{" "}
        <Link href="" target="_blank">
          Henrique.
        </Link>
      </span>
    </Container>
  );
}
