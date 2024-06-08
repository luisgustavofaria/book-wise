import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.gray[800]};
    }
    body, p, h1, h2, h3, h4, h5, button, p{
    font-family: 'Nunito Sans', sans-serif;
  }
  
 
  
`
