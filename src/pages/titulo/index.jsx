import { useState } from "react";
import './index.scss'

export default function Titulo () {
    const [texto, setTexto] = useState ('Escreva o texto');

     function mexer(evento) {
        setTexto(evento.target.value);}

        return (
         
          <div className="mae">
         <section>
           
         <h1>{texto}</h1>

         <input type="text" placeholder="Digite algo" onChange={mexer}/>
         </section>

         <section>

         <h1>Escolher Professor {texto}</h1>

         <select onChange={mexer}>

          <option>Robson</option>
          <option>Bruno</option>
          <option>Diogo</option>

         </select>

         </section>
          </div>

        )
}