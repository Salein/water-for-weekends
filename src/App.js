import React from 'react'
import './App.css'
import MyButton from './components/MyButton'


const App = () => {

  return (
    <div className="App">
        <MyButton value={'Добавить банки за 1 рейс'} />
        <MyButton value={'Добавить банки за 2 рейс'} />
        <MyButton value={'Добавить 5л'} />
        <MyButton value={'Добавить 10л'} />
        <MyButton value={'Ввести сумму сопутки'}/>
    </div>
  )
}

export default App
