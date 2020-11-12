import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card.jsx'
import logo from './github.png'

const App = () => {
  const [user, setUser] = useState('')
  const [active, setActive] = useState(false)
  const [card, setCard] = useState({})

  const addUser = (input) => {
    setUser(input.target.value)
  }

  const handleToggle = (user) => {
    if (user) {
      fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(res => {
        setActive(true)
        setCard(res)
        console.log(res)
      })
    }
  }
  const toggle = () => {
    active ? setActive(false) : setActive(true)
  }

  return (
    <div className="App">
      <header className="App-header" >
        <div>
          <div className='topo'>
            <img alt='logo' src={logo} className='logo' style={{marginTop: '20px'}}></img>
          </div><br/>
          <input onChange={addUser} className='gitName'></input>
          <button onClick={() => handleToggle(user)} className='buscar'>Buscar</button>
          {!active && <button onClick={toggle} className='buscar'>Mostrar</button>}
          {active && <button onClick={toggle} className='buscar'>Esconder</button>}
        </div>
        <div id='container'>
          {active && <Card img={card.avatar_url} name={card.name} location={card.location} link={card.html_url} followers={card.followers}/>}
          
        </div>
      </header>
    </div>
  );
}

export default App;
