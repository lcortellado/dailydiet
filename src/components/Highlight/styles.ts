import styled from "styled-components/native";

export type ContentComponentStyleProps =  'RED_LIGHT' | 'GREEN_LIGHT' | 'GRAY_200'

type Props = {
    backgroundColor: ContentComponentStyleProps
}


export const Container = styled.View<Props>`
background-color: ${({theme, backgroundColor}) => theme.COLORS[backgroundColor] };
border-radius: 8px;
flex-direction: row;
margin-vertical: 8px;
justify-content: center;
flex: 1;
max-height: 107px;
align-items: center;

`
export const Content = styled.View`
align-items: center;
justify-content: center;
padding-vertical: 25px;
width: 90%;
`

export const Title = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.XXL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
text-align: center;
`

export const SubTitle = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR };
text-align: center;
`