import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
margin-top: 66px;
margin-bottom: 30px;
`;

export const BackButtonContainer = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
margin-top: 56px;
margin-bottom: 30px;
`;

export const LogoContainer = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
`;

export const Logo = styled.Image`
width: 37.27px;
height: 38px;
`
export const Title = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
font-weight: bold;
`

export const LogoProfile = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
`

export const BackButton = styled.TouchableOpacity`
flex: 0.5
`

export const BackIcon = styled(ArrowLeft).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_600
}))``;

export const BackTitle = styled.Text`
size: ${({theme}) => theme.FONT_SIZE.XL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
`