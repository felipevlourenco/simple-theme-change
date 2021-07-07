import { createGlobalStyle } from 'styled-components'

interface themeProps {
  body: string
  textColor: string
  headingColor: string
}

export type DefaultThemeProps = {
  theme: themeProps
}

export const darkTheme = {
  body: '#000',
  textColor: '#fff',
  headingColor: 'lightblue'
}

export const lightTheme = {
  body: '#fff',
  textColor: '#000',
  headingColor: '#d23669'
}

export const GlobalStyles = createGlobalStyle<DefaultThemeProps>`
 body {
  background: ${props => props.theme.body};
  color: ${props => props.theme.textColor};
  transition: .3s ease;
 }
 h1{
   color: ${props => props.theme.headingColor};
 }
`
