import ItemList from "./ItemList"

function List() {
    return (
        // Criamos 3 validações:
            // 1 - Text => Aceita apenas Tecto, mas não orbigatório
            // 2 - Number => Aceita apenas número, mas não orbigatório
            // 3 - Number Required => Aceita apenas Texto, e é obrigatório
        <>
            <h1>Minha Lista</h1>
            <ul>
                
                <ItemList tipoString="Teste" tipoNumber={100} numberRequired={1} /* 1 - Text */ /> 
                
                <ItemList tipoNumber={10} numberRequired={12} /* 1 - Number */ />
                
                <ItemList /* 1 - Number Required */ /> 
            </ul>
        </>

        // Aqui colocamos nosso componente juntamente com suas "Props"
    )
}

export default List