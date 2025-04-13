import './App.css'
import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'

const App = (props) => {
  const [headerTitle, setHeaderTitle] = useState("Pokémon");
  return (
    <div id='app'>
      <Header>
        {headerTitle}
      </Header>
      <Main setHeaderTitle={setHeaderTitle}/>
    </div>
  )
}

export default App
