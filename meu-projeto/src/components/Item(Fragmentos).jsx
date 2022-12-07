//avançando em props
import PropTypes from 'prop-types'

function Item({marca, ano_lançamento}) {
    return (
        <>
        <li>
            {marca} - {ano_lançamento}
        </li>
        </>
    )
    
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lançamento: PropTypes.number,
}


// se estiver vazio, usuário não preencheu
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lançamento: 0,
}

export default Item