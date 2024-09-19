import { ArrowUpRight, Circle, IconProps, PencilLine, Plus, Trash } from "phosphor-react-native"

import { DinamicIcon } from "@components/Dinamicicon";
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonTypeStyleProps =  'PRIMARY' | 'SECONDARY'
export type IconNames = 'PencilLine' | 'Trash' | 'Plus' | 'Circle'

type Props = {
    type: ButtonTypeStyleProps
    icon?: IconNames
} & IconProps

export const Container = styled(TouchableOpacity)<Props>`
flex: 1;
flex-direction: row;
min-height: 56px;
max-height: 56px;
background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_200 };
border-radius: 6px;
border-width: ${({type}) => type === "SECONDARY" ? 1 : 0}px;
align-items: center;
justify-content: center;
gap: 16px;
` 
  export const Icon = styled(DinamicIcon).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_DARK,
  }))``;

export const Label = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
color: ${({ theme }) => theme.COLORS.WHITE};
`

