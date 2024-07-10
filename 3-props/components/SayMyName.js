function SayNyName(props /* Para usar as Props colocamos ela aqui e chamamos ela dentro do nosso elemento */) {

// Props basicamente são valores que determinados que podem ser variados

    return (
        <p>Meu nome é {props.name}</p>
        // Estamos Criando uma Props com o nome "name", que basicamente vai ser manipulada como um atributo da tag
    )

}

export default SayNyName // Esportando o componente "SayMyName"