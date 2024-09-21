import { TypeStyleProps } from "@components/IconComponent/styles";
import styled from "styled-components/native";

type Props = {
    type: TypeStyleProps
} 

export const Container = styled.View<Props>`
flex: 1;
background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`
export const HeaderContainer = styled.View `
padding-left: 24px;
padding-right: 24px;
flex: 0.3

`

export const Content = styled.View`
flex: 1;
background-color: ${({theme, }) => theme.COLORS.WHITE };
border-top-right-radius: 20px;
border-top-left-radius: 20px;
padding: 20px;
margin-top: 10px;
`

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
text-align: center;
margin-vertical: 12px;
`

export const ContentRow = styled.View`
flex:1 ;
flex-direction: row;
gap: 8px;
`