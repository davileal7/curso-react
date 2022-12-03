// FRAGMENTOS <> </>  troca <div><div/>

import Item from "./Item(Fragmentos)"

function List() {
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <Item marca='Ferrari'/>
        </ul>
        </>
    )
    
}

export default List