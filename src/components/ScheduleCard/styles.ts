import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
border-width: 1px;
border-radius: 6px;
margin-vertical: 5px;
border-color: ${({theme}) => theme.COLORS.GRAY_300};
align-items: center;
min-height: 49px;
`
export const TimeContainer = styled.View`
border-right-width: 1px;
padding-horizontal: 12px;
border-color: ${({theme}) => theme.COLORS.GRAY_400};
`
export const Time = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
color: ${({theme}) => theme.COLORS.GRAY_700 };
`
export const TitleContainer = styled.View`
flex: 1px;
padding-left: 12px;
`
export const Title = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR };
color: ${({theme}) => theme.COLORS.GRAY_600 };
`
export const StatusContainer = styled.View`
padding-Horizontal: 10px;
`