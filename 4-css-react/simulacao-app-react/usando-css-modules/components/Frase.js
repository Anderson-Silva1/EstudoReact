    // Vamos estilizar a nível de componente esse nosso componente!
    // Então primeiro criamos uma pasta chamada "(nome do  componente).modules.css" que ficará assim: "Frase.modules.css"
    // Depois estilizamos nosso conteúdo 


import "./Frase.modules.css"
    // Depois de criar nosso arquivo "Frase.modules.css" precisamos importar ele dentro do nosso componente "Frase" onde vai ser estilizado

function Frase() {
    return (
        
        // Agora colocamos as nossas classes em nossos elementos React, porém com uma diferênça... Não colocamos nossas classes da maneira convencional que é: class=""... Usamos no React o "className", e sua sintaxe ficará mais ou menos assim: className="classe"

        <div className="FraseConteiner">
            <p className="frase_item">Meu primeiro componente</p>
        </div>
    )
}

export default Frase