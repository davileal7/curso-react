//Renderizaçãi em Listas
//Struct {itens}
function OutraLista({itens}) {
    return (
        <>
        <h3>Lista de coisas boas:</h3>
        {itens.length > 0 ?(
            /*argumento(item)
            */
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) :(
                <p>Não há item na lista</p>
            )
        }
        </>
    ) 
}

export default OutraLista

//if {} 
//else :()