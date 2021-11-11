import { useState } from 'react';
import './style.css';

const Compras = () => {
    const [contador, setContador] = useState(0);

    function comprar() {
        setContador(contador + 1)
    }

    function excluir() {
        setContador(contador - 1)
    }

    return (
        <div className="main">
            <h4 className="titleProduct">Quantidade de Produtos XYZ:</h4>
            <p className="cont">{contador} queijo(s)</p>

            <button className="btn-" onClick={excluir}> - </button>
            <button className="btnP" onClick={comprar}> + </button>


            <p className="totalP">Total: {contador} unidades.</p>
            <p className="price">Preço: R$ {contador * 20}</p>
        </div>
    )
}

export default Compras;

