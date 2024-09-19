import { ArrowUpRight } from "phosphor-react-native"
import { TypeStyleProps } from "@components/IconComponent/styles"
import styled from "styled-components/native"

type Props = {
    type: TypeStyleProps
}

export const Container = styled.TouchableOpacity`
padding-top: 8px;
padding-right: 8px;
height: 52px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;


