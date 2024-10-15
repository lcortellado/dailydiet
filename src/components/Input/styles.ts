import { TextInput } from "react-native";
import styled from "styled-components/native";
type Props = {
    multiline?: boolean
}
export const Container = styled(TextInput)<Props>`
flex: 1;

min-height: 56px;
max-height: ${({multiline}) => multiline ? 120: 56 }px;
border-radius: 6px;
padding: 16px;
border-width: 1px;
border-color: ${({theme}) => theme.COLORS.GRAY_300};
color: ${({theme}) => theme.COLORS.GRAY_700};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`