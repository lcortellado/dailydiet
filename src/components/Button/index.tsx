import { Container, Label } from "./styles";
import { IconNames, TypeStyleProps } from "@components/IconComponent/styles";

import { IconComponent } from "@components/IconComponent";
import { IconWeight } from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  type: TypeStyleProps;
  label: string;
  iconName?: IconNames;
  isShowIcon?: boolean;
  iconColorType?: TypeStyleProps;
  onPress?: () => void;
  color?: string;
  iconWeight?: IconWeight;
};

export function Button({
  type,
  label,
  iconName,
  isShowIcon = false,
  iconColorType,
  onPress,
  color,
  iconWeight,
}: Props) {
  return (
    <Container type={type} onPress={onPress}>
      {isShowIcon && (
        <IconComponent
          iconName={iconName}
          type={type}
          iconWeight={iconWeight}
        />
      )}

      <Label color={color}>{label}</Label>
    </Container>
  );
}
