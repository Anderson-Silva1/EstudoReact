import Frase from "./Frase" // Importando o componente Frase

// Criando o componente "HelloWorld"  
function HelloWorld() {
    return (

        <>
            <h1>Hello World</h1>
            <Frase />
            <Frase />
            <Frase />
            <Frase />
        </>
        // Usando o componente importado "Frase"
    )
}

export default HelloWorld // Exportando o componente "HelloWorld"