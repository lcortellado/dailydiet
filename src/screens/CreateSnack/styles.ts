import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.COLORS.GRAY_300 };;
`
export const HeaderContainer = styled.View `
padding-left: 24px;

`

export const Content = styled.View`
flex: 1;
background-color: ${({theme, }) => theme.COLORS.WHITE };
border-top-right-radius: 20px;
border-top-left-radius: 20px;
padding: 20px;
margin-top: 20px;
`
export const InputLabel = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
margin-top: 20px;
margin-bottom: 5px;
`
export const DateContent = styled.View`
flex: 1;
flex-direction: row;
gap: 20px
`
export const InputDateContainer = styled.View`
flex: 1;
flex-direction: column;
`

export const DateTimeContent = styled.TouchableOpacity`
border-width: 1px;
border-radius: 6px;
border-color: ${({theme}) => theme.COLORS.GRAY_300};
min-height: 56px;
justify-content: center;
align-items: start;
padding-left: 15px;
`
export const DateLabel = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR };
`