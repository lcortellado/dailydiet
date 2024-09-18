import styled from "styled-components/native";

export type ContentComponentStyleProps =  'RED_LIGHT' | 'GREEN_LIGHT' | 'GRAY_200'

type Props = {
    backgroundColor: ContentComponentStyleProps
}


export const Container = styled.View<Props>`
flex:1;
background-color: ${({theme, backgroundColor}) => theme.COLORS[backgroundColor] };
border-radius: 8px;
flex-direction: row;

`
export const Content = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
`

export const SubTitle = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR };
`