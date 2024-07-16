function Event(){

    // Nosso Evento
    function myEvent() {
        return console.log("Fui clicado!!")
    }

    return(
        // Para criarmoa um evento podemnos colocar ele diretamentre dentro da tag HTML jutamente com uma Função que será ativada quando esse evendo ocorrer
        <>
            {/* Perceba que diferente do modo tradicional não podemos chamar a Função dessa forma = myEvent()... Pois dessa forma estaremos chamando esse evento */}
            <button onClick={myEvent}>Clique para disparar um evento</button>
        </>
    )
}

export default Event