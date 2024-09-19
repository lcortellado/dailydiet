import { Icon, IconNames, TypeStyleProps } from "./styles";

import { IconWeight } from "phosphor-react-native";

type Props = {
  type?: TypeStyleProps;
  iconName?: IconNames;
  iconWeight?: IconWeight;
};
export function IconComponent({ iconName, type, iconWeight }: Props) {
  return <Icon icon={iconName} type={type} iconWeight={iconWeight} />;
}
