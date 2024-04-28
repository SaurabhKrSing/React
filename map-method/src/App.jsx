import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  let FoodItem = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Watermelon", "Pineapple", "Grapes", "Strawberry", "Sugercane"];

  return (
    <center>
      <h1>Healthy Food</h1>
      <ul class="list-group">

        {FoodItem.map((item) => (
          <li key={item} className="list-group-item list-group-item-primary">{item}</li>
        ))}

      </ul>
    </center>
  )
}

export default App
