//STRUCT - Pessoa({nome,idade...}) || Pessoa(props) {props.nome...}

function Pessoa({nome, idade, profissao, foto, estado}) {
    return(
    <div>
        <img src={foto} alt={nome} />
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <p>Estado: {estado}</p>
    </div>
    )   
}

export default Pessoa