import './App.css'
import { Card } from './Cards'

function App() {

  return (
    <div className='app '>
      <Card name="Tomas" age="22" img="../../public/vite.svg" button="El padre de la pelaa' bien gamin"/>
      <Card name="Laura" age="21" img="../../src/assets/react.svg" button="La madre de la pelaa' bien gamin" />
      <Card name="Emmy" age="4" img="../../src/assets/react.svg" button="Una pelaa' bien gamin" />
    </div>
  )
}

export default App
