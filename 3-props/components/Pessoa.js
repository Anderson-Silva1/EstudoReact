function Pessoa(props) {
    return (
        <>
            <img src={props.foto} />
            <h2>Nome: {props.name}</h2>
            <p>Idade: {props.anos}</p>
            <p>Profissão: {props.profissao}</p>
        </>

    )
}

export default Pessoa