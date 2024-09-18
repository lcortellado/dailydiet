import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: ButtonIconTypeStyleProps;
};

export function ButtonIcon({ type }: Props) {
  return (
    <Container>
      <Icon type={type} />
    </Container>
  );
}
