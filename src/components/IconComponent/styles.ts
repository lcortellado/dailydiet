import { IconProps, IconWeight } from "phosphor-react-native";

import { DinamicIcon } from "@components/Dinamicicon";
import { getBackgroundColorSelected } from "../../utils/utils";
import styled from "styled-components/native";

export type TypeStyleProps =  'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'CANCEL'
export type IconNames = 'PencilLine' | 'Trash' | 'Plus' | 'Circle'

type Props = {
    type?: TypeStyleProps
    icon?: IconNames
    iconWeight?: IconWeight
} & IconProps

const getColor = (theme: any, type?: string) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_MID;
      case 'SECONDARY':
        return theme.COLORS.RED_MID;
      case 'SUCCESS':
        return theme.COLORS.GREEN_DARK;
      case 'CANCEL':
        return theme.COLORS.RED_DARK;
      default:
        return theme.COLORS.WHITE;
    }
  };

export const Icon = styled(DinamicIcon).attrs<Props>(({ theme, type, iconWeight }) => ({
    size: 18,
    color: getColor(theme, type),
    weight: iconWeight
  }))``;