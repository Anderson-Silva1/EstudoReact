import ItemList from "./ItemList"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <ItemList tipoString="Teste" tipoNumber={10} numberRequired={12} stringRequired="Anderson" />
            </ul>
        </>

        // Aqui colocamos nosso componente juntamente com suas "Props"
    )
}

export default List