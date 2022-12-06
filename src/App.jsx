import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import {Banner } from './components/Banner/Banner'
import {About} from './components/About/About'
import {Footer} from './components/Footer/Footer'
import {Services} from './components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <About reverse={true}/>
        <Footer/>
    </div>
  )
}

export default App
