import React, { useState } from "react"
import "./App.css"
import MyButton from "./components/MyButton/MyButton"
import MyInput from "./components/MyInput/MyInput"

const App = () => {

  const [title, setTitle] = useState({clear1: '', clear2: '', clear3: '', clear4: '', clear5: ''})

  const handleClear = () => {
    setTitle({clear1: '', clear2: '', clear3: '', clear4: '', clear5: ''})
  }

  return (
    <div className="App">
     <MyInput onChange={e => setTitle({clear1: e.target.value})} value={title.clear1} placeholder="Кол-во банок 1 рейс" />
     <MyInput onChange={e => setTitle({clear2: e.target.value})} value={title.clear2} placeholder="Кол-во банок 2 рейс" />
     <MyInput onChange={e => setTitle({clear3: e.target.value})} value={title.clear3} placeholder="Кол-во 5л" />
     <MyInput onChange={e => setTitle({clear4: e.target.value})} value={title.clear4} placeholder="Кол-во 10л" />
     <MyInput onChange={e => setTitle({clear5: e.target.value})} value={title.clear5} placeholder="Сумма сопутки" />
      <MyButton onClick={handleClear} >Посчитать</MyButton>
    </div>
  )
}

export default App
