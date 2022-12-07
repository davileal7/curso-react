// FRAGMENTOS <> </>  troca <div><div/>
//avançando em props

//importa Item
import Item from "./Item(Fragmentos)"

function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca='Merceds' ano_lançamento={1985} />
            <Item marca='Ford' ano_lançamento={1970} />
            <Item marca='Ferrari'/>
            <Item marca={'Mustang'} ano_lançamento={1965}/>
            <Item />
        </ul>
        </>
    )
    
}

export default List