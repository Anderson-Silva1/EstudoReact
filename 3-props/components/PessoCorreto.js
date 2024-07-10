// Essa é a melhor maneirade usar os props para mais de um valor

function Pessoa({foto, nome, anos, profissao}) /* No JS temos um recurso chamado "Destruct", com ele podemos encurtar variáveis que tem o mesmo nome e vaLor para apanas uma repetição, no nosso caso usaremos "{}" e aqui colocaremos os valores*/ {

    return (
        <>
            <img src={foto} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {anos}</p>
            <p>Profissão: {profissao}</p>
        </>

    )
}

export default Pessoa