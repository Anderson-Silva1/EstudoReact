// Podemos usar uma espécie de validação usando as "props"

// Pra isso importamos a "prop-Types" primeiro, como na linha abaixo
import PropTypes from "prop-types" //


// Lembrando que podemos fazer assim usando a palavra props, mas não é viável
/* 
    function ItemListTeste(props){
        return (
            <li>{props.tipoString} - {props.tipoNumber} - {props.numberRequired} - {props.stringRequired}</li>
        )
    }
*/

// Depois criamos o nosso componente
function ItemList ({tipoString, tipoNumber, numberRequired}) /* E colocamos nossas "props" Aqui usando o destruct */ {
    return (
        <li>{tipoString} - {tipoNumber} - {numberRequired}</li>
    )
}

// Para usar-mos esse objeto, faremos da seguinte maneira:
ItemList.propTypes = {

    // Essa é um tipo de validação onde o campo vai receber apenas o tipo "Texto"
    tipoString: PropTypes.string,

    // Essa é um tipo de validação onde o campo vai receber apenas o tipo "Número"
    tipoNumber: PropTypes.number,

    // Essa é um tipo de validação onde o campo vai ser obrigatório
    numberRequired: PropTypes.number.isRequired,    
}

// Resaltando mais uma vêz... Essa validação é a nível programador, ou seja, o usuário não vai perceber diferença alguma se usar a "prop-types" ou não, vai aparecer o resultado na tela normalmente, porém se formos ver o "console.log" desse objeto iremos ver um erro...

// Isso vai servir bastante para facilitar a leitura e entendimento do funcionamento do código para outros programadores...

// Isso vai servir bastante também para padronizar os dados do nosso sistema em determinados campos... Pois nesse caso os dados não estão sendo processados, mas em um projeto real, esses dados iriam passar parao "back-end", e por questão disso não podem ir com o tipo de dado diferente do que será processado... Uma sstring é diferente de um number!!!...




// Podemos também colocar um valor Padrão para esses campos, para isso usamos o "defaultProps":
ItemList.defaultProps = {
    tipoString: "Campo não Preenchido",
    tipoNumber: "Não preenchido",
    numberRequired: "Não preenchido",
}


export default ItemList