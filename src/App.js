import { useState } from "react";

export default function App() {
  const [Libero, setLibero] = useState(true);
  const [Medio, setMedio] = useState(false);
  const [Pieno, setPieno] = useState(false);
  const [Utente, setUtente] = useState(0);

  let num = Utente;

  function affollamento() {
    let numaff = num;
    console.log(numaff);

    if (numaff < 200) {
      console.log("libero");

      setLibero(true);
      setPieno(false);
      setMedio(false);
    }

    if (numaff > 200 && numaff < 400) {
      console.log("medio");
      setMedio(true);
      setLibero(false);
      setPieno(false);
    }
    if (numaff > 400) {
      console.log("pieno");

      setPieno(true);
      setMedio(false);
      setLibero(false);
    }
  }

  return (
    <div>
      <div>
        <input type="text" onBlur={(e) => setUtente(e.target.value)}></input>
      </div>
      <div>
        <button onClick={()=>affollamento()}>clicca</button>
      </div>
      <div  className="contenitore">
      {Libero ? <div className="libero"> {''}</div> : null}

        {Medio ? <div className="medio"> {''} </div> : null}

        {Pieno ? <div className="aff"> {''}</div> : null}
      </div>
    </div>
  );
}
