/* Podemos também usar estilos globais como um "CSS.reset" usando o "styled-components" */

import { createGlobalStyle } from "styled-components"; // Primeiro importamos esse carinha

//Depois criamos uma variável recebendo o valor importado + "Craze" (``)
export const GlobalStyles = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

// Depois precisamos importar esse valor dentro do arquivo "index.js" ou "index.jsx"