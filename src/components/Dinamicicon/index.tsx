import {
  Circle,
  IconProps,
  PencilLine,
  Plus,
  Trash,
} from "phosphor-react-native";
import { IconNames, TypeStyleProps } from "@components/IconComponent/styles";

import React from "react";

const iconMap = {
  PencilLine,
  Trash,
  Plus,
  Circle,
};

type IconComponentProps = {
  icon: IconNames;
  type: TypeStyleProps;
} & IconProps;

export const DinamicIcon: React.FC<IconComponentProps> = ({
  icon,
  type,
  ...props
}) => {
  const DinamicIcon = iconMap[icon];
  return <DinamicIcon {...props} />;
};
