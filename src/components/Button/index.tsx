import {
  ButtonTypeStyleProps,
  Container,
  Icon,
  IconNames,
  Label,
} from "./styles";

import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: ButtonTypeStyleProps;
  label: string;
  iconName?: IconNames;
  isShowIcon?: boolean;
};

export function Button({ type, label, iconName, isShowIcon = false }: Props) {
  return (
    <Container type={type}>
      {isShowIcon && <Icon icon={iconName} type={type} />}

      <Label>{label}</Label>
    </Container>
  );
}
