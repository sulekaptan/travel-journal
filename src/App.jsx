import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import data from "../src/data"
import Card from './components/Card'

export default function App() {
  const cards = data.map(item => {
  return(
    <Card
      key={item.id}
      {...item}
    />
  )
  })
  return (
    <div className="App">
      <Navbar />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
 
}

