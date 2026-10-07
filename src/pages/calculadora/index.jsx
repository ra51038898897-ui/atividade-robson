import { useState } from "react";
import './index.scss';

export default function Calculadora () {
    const [num1, setNum1] = useState (0);
    const [num2, setNum2] = useState (0);
    const [resp, setResp] = useState (0);

    function somar () {
        let soma = Number(num1) + Number(num2)
        setResp (soma)
    }

     function multiplicar () {
        let multiplicar = Number(num1) * Number(num2)
        setResp (multiplicar)
    }

    function subtracao () {
        let subtracao = Number(num1) - Number(num2)
        setResp (subtracao)
    }

    function dividir () {
        let divisao = Number(num1) / Number(num2)
        setResp (divisao)
    }

    return (

        <div className="pagina">
          <input type="text"value={num1} onChange={(e) => setNum1(e.target.value)}/>

        <input type="text"value={num2} onChange={(e) => setNum2(e.target.value)}/>

         <button onClick={somar}>Somar</button>
         <button onClick={multiplicar}>Multiplicar</button>
         <button onClick={subtracao}>Subtrair</button>
         <button onClick={dividir}>Dividir</button>

            <div>
                <p>Resultado: {resp}</p>
            </div>

        </div>
    );


}
 