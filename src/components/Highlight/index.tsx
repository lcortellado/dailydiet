import {
  Container,
  Content,
  ContentComponentStyleProps,
  SubTitle,
  Title,
} from "./styles";

import { ButtonIcon } from "@components/Buttonicon";
import { TypeStyleProps } from "@components/IconComponent/styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  subtitle?: string;
  showButtonIcon?: boolean;
  backgroundColor: ContentComponentStyleProps;
  type: TypeStyleProps;
};
export function Highlight({
  title,
  subtitle,
  showButtonIcon = false,
  backgroundColor,
  type,
}: Props) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Content>
      {showButtonIcon && <ButtonIcon type={type} />}
    </Container>
  );
}
