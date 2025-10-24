import { useState } from 'react'

import './App.css'
function App() {
  const [name, Setname] = useState("")
  const [Pais, SetPais] = useState("")
  const [Datos, SetDatos] = useState("")
  const ObtenerPais = () => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(data => data.json())
      .then(Arr => SetPais(Arr[0]))
  }

  { console.log(name, Pais); }




  return (
    <>
      <h1> INFO PAISES  </h1>
      <input type='text' onChange={(e) => Setname(e.target.value)} ></input>
      <button onClick={ObtenerPais} >Mostrar Pais</button>
      {Pais && (
        <div>
          <h2>{Pais.name.common}</h2>
          <p><strong>Nombre oficial:</strong> {Pais.name.official}</p>
          <img src={Pais.flags.png} alt={`Bandera de ${Pais.name.common}`} width="150" />
          <p><strong>Capital:</strong> {Pais.capital?.[0]}</p>
          <p><strong>Región:</strong> {Pais.region}</p>
          <p><strong>Población:</strong> {Pais.population.toLocaleString()}</p>
          <p><strong>Área:</strong> {Pais.area.toLocaleString()} km²</p>
          <p><strong>Moneda:</strong> {Object.values(Pais.currencies || {})[0]?.name}</p>
          <p><strong>Idioma principal:</strong> {Object.values(Pais.languages || {})[0]}</p>
        
        </div>)}

    </>
  )
}
export default App
