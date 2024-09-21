import styled from 'styled-components/native'

export const Container = styled.ScrollView`
flex: 1;
background-color: ${({theme}) => theme.COLORS.GRAY_100 };
padding-left: 24px;
padding-right: 24px;
`
export const Content = styled.View`
margin-bottom: 15px;
`
export const SectionListContainer = styled.View`
margin-top: 20px;
margin-bottom: 5px;
`
export const SectionListHeader = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD };
color: ${({theme}) => theme.COLORS.GRAY_700 };
`
export const AddNewItemContainer = styled.View`
padding-vertical: 30px;
justify-content: center;
margin-vertical: 20px
`

export const NewItemContainer = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR };
color: ${({theme}) => theme.COLORS.GRAY_700 };
margin-vertical: 10px;
`