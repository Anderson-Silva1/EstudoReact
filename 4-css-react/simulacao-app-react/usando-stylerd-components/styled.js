/* Para usara biblioteca "styled-components" nós precisamos importá-la primeiro */

import styled from "styled-components"; // Importamos assim

/* Aqui nós trabalhamos diferente, neste arquivo styled.js nós criamos diretamente nossos componentes */

// Paracriar nossos componentes nós primeiramente criamos uma variável e depois isamos esse Objeto "Styled" para selecionaro tipo de elementos HTML vai ser usado, e depois usamos as "Crazes" (``) para estilizar e por fim exportamos ela, o componente

export const Teste1 = styled.h1 `
    color: red;
    font-weight: bolder;
` // Dessa forma conseguimos criar um componente e estilizar esse componentes

export const Teste2 = styled.h1 `
    color: green;
    font-weight: bolder;
` // Assim podemos criar nosso componente e exportar ele ao mesmo tempo, usando o export antes da declaração da variável



