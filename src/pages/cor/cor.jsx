import { useState } from 'react';
import './cor.scss';

export default function Variavel () {
    const [Cor, setCor] = useState (" ");
    const [Descricao, setDescricao] = useState (" Digita algo ai ");
    const [DescricaoDois, setDescricaoDois] = useState (" ? ");
    const [DescricaoTres, setDescricaotres] = useState (" ? ");
    const [ Var1, setVar1] = useState (true);

    function mudar (e) {
        let novo = e.target.value 
        setDescricao (novo)}


    function pegarTexto (e) {
    let novo = e.target.value
    setDescricaoDois (novo)
  };

  function mudarDescricao (e) {
    setDescricaotres (DescricaoDois)
  };

  function mudarCor (e) {
    let novo = e.target.value
    setCor (novo)
  };

function Gostou (e) {
    let novo = e.target.checked
    setVar1 (novo)
}

return(
    <div className='pagina' style = {{backgroundColor: Cor}}>
        <h1>{Descricao}</h1>
        <input onChange={mudar} type="text" placeholder=''/>

        <section>
        <h2>{DescricaoTres}</h2>
        <input onChange={pegarTexto} type='text' placeholder=''/>
        <button onClick={mudarDescricao}> Troca ai </button>
    </section>

    <section>
        <h1>A cor selecionada é: {Cor}</h1>
        <input type='color' onChange={mudarCor}/>
    </section>

    <section>
        <h1>Você gosta {Var1 ? "sim": "nao"}</h1>
        <input type='checkbox' checked={Var1} onChange={Gostou}/>
   </section>
    </div>

)
};

  

