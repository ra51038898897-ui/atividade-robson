import {useState} from 'react';
import './index.scss'


export default function Contador () {
const [numero, setNumero] = useState (0);


    function mais () { 
       setNumero (numero + 1)
    }

    function menos () {
        setNumero (numero - 1)
    }

    return (

        <div className='mae'>
            <h1>Contador</h1>

            <div className='filho'>
              <button onClick={menos}>-</button>
              <h2>{numero}</h2>
              <button onClick={mais}>+</button>
            </div>

        </div>
    )
}