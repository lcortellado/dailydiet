import { ArrowUpRight } from "phosphor-react-native"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export type ButtonIconTypeStyleProps =  'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled.TouchableOpacity`
padding-top: 8px;
padding-right: 8px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_DARK,
}))``;


