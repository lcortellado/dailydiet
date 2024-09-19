import { IconProps } from "phosphor-react-native"
import { TouchableOpacity } from "react-native"
import { TypeStyleProps } from "@components/IconComponent/styles";
import styled from "styled-components/native"

type Props = {
    type: TypeStyleProps
} & IconProps

export const Container = styled(TouchableOpacity)<Props>`
flex: 1;
flex-direction: row;
min-height: 56px;
max-height: 56px;
background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_200 };
border-radius: 6px;
border-width: ${({type}) => type === "SECONDARY" ? 1 : 0}px;
align-items: center;
justify-content: center;
gap: 16px;
` 
export const Label = styled.Text`
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
color: ${({ theme }) => theme.COLORS.WHITE};
`

