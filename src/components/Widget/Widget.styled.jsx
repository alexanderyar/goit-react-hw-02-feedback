import styled from 'styled-components'


export const WidgetWrapper = styled.div`
width: 700px;
margin-left:auto;
margin-right:auto;
margin-bottom: 100px;
`

export const Text = styled.p`
// text-align:center;
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
`

export const Button = styled.button`
// display:block;

padding-right: 50px;
padding-left: 15px;
padding-top:20px;
padding-bottom:15px;

margin-right: 20px;

text-align:center;

cursor:pointer;

border: none;
border-radius: 15%;
background-color: ${p => p.theme.colors.buttonColor};
text-color: ${p => p.theme.colors.primary};
`

export const FeedbackCount = styled.span`
margin-right: 50px;

color: ${p => p.theme.colors.primary};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.normal}
`
export const NotificationForTheBox = styled.p`
font-size: ${p => p.theme.fontSizes.xl};
`