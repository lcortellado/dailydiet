import {
  Container,
  Content,
  ContentComponentStyleProps,
  SubTitle,
  Title,
} from "./styles";

import { ButtonIcon } from "@components/Buttonicon";

type Props = {
  title: string;
  subtitle?: string;
  showButtonIcon?: boolean;
  backgroundColor: ContentComponentStyleProps;
};
export function Highlight({
  title,
  subtitle,
  showButtonIcon = false,
  backgroundColor,
}: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
      {showButtonIcon && <ButtonIcon type="SECONDARY" />}
    </Container>
  );
}
