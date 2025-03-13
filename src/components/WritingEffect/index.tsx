import { useCallback, useEffect, useState } from "react";
import {
  HeaderContainer,
  Title,
  TextCursor,
  Highlight,
  Subtitle,
} from "./styles";

interface TextProps {
  textValue: string;
}

export function WritingEffect({ textValue }: TextProps) {
  const [text, setText] = useState("");

  const typeWriter = useCallback(
    (text: string, i = 0) => {
      if (i < textValue.length) {
        setText(text.slice(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1);
        }, 100);
      }
    },
    [textValue.length]
  );

  useEffect(() => {
    typeWriter(textValue);
  }, [typeWriter, textValue]);

  return (
    <HeaderContainer>
      <Title>
        <Highlight>{"{"}</Highlight> {text}
        <TextCursor />
        <Highlight>{"}"}</Highlight>
      </Title>
      <Subtitle>Desenvolvedor Full Stack</Subtitle>
    </HeaderContainer>
  );
}
