import { ButtonTypeStyleProps, IconNames } from "@components/Button/styles";
import {
  Circle,
  IconProps,
  PencilLine,
  Plus,
  Trash,
} from "phosphor-react-native";

import React from "react";

const iconMap = {
  PencilLine,
  Trash,
  Plus,
  Circle,
};

type IconComponentProps = {
  icon: IconNames;
  type: ButtonTypeStyleProps;
} & IconProps;

export const DinamicIcon: React.FC<IconComponentProps> = ({
  icon,
  type,
  ...props
}) => {
  const DinamicIcon = iconMap[icon];
  return <DinamicIcon {...props} />;
};
