const ItemListContainer = (props) =>{  /* recibo por parametro (props) un objeto, del que tomo la propiedad greeting */
    return <h2>{ props.greeting }</h2>
}
/* Versión alternativa, desestructurando "props"

const ItemListContainer = ({ greeting }) => recibo por parametro (props) un objeto, del que tomo la propiedad greeting
return <h2>{ greeting }</h2>
} */
export default ItemListContainer