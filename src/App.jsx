import { useState } from 'react'

import './App.css'

function App() {
  const [image, setImage] = useState()

  const Obtenerimagen = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(data => data.json())
    .then(Obj => setImage(Obj.message) )
}

  return (
    <>
    </>
  )
}

export default App
