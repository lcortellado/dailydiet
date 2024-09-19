import { Container, Label } from "./styles";
import { IconNames, TypeStyleProps } from "@components/IconComponent/styles";

import { IconComponent } from "@components/IconComponent";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: TypeStyleProps;
  label: string;
  iconName?: IconNames;
  isShowIcon?: boolean;
};

export function Button({ type, label, iconName, isShowIcon = false }: Props) {
  return (
    <Container type={type}>
      {isShowIcon && <IconComponent iconName={iconName} type={type} />}

      <Label>{label}</Label>
    </Container>
  );
}
