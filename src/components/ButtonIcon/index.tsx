import { Container, Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";
import { TypeStyleProps } from "@components/IconComponent/styles";

type Props = TouchableOpacityProps & {
  type: TypeStyleProps;
};

export function ButtonIcon({ type }: Props) {
  return (
    <Container>
      <Icon type={type} />
    </Container>
  );
}
