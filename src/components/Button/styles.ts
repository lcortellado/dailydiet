import { getBackgroundColorSelected, getColor } from "../../utils/utils";

import { IconProps } from "phosphor-react-native"
import { TouchableOpacity } from "react-native"
import { TypeStyleProps } from "@components/IconComponent/styles";
import styled from "styled-components/native"

type Props = {
    type?: TypeStyleProps
    selected?: boolean
    color?: string
} & IconProps

export const Container = styled(TouchableOpacity)<Props>`
flex: 1;
flex-direction: row;
min-height: 56px;
max-height: 56px;
background-color: ${({theme, type, selected = false}) => selected ?  getBackgroundColorSelected(theme, type): getColor(theme, type) };
border-radius: 6px;
border-width: ${({type}) => type === "SECONDARY" ? 1 : 0}px;
align-items: center;
justify-content: center;
gap: 16px;
border-width: ${({ selected  }) => selected ? 1 : 0}px;
border-color: ${({theme, type}) => getColor(theme, type)};
` 
export const Label = styled.Text<Props>`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
color: ${({ theme, color = theme.COLORS.WHITE}) => color};
`

