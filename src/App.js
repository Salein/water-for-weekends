import React, { useState } from "react"
import "./App.css"
import MyButton from "./components/MyButton/MyButton"
import MyInput from "./components/MyInput/MyInput"
import MyModal from "./components/modal/MyModal"

const App = () => {

  const [modal, setModal] = useState(false)
  const [sum, setSum] = useState(0)
  const [clear1, setClear1] = useState('')
  const [clear2, setClear2] = useState('')
  const [clear3, setClear3] = useState('')
  const [clear4, setClear4] = useState('')
  const [clear5, setClear5] = useState('')


  const handleClick = () => {
    setModal(true)
    setSum(clearOne + clearTwo + clearThree + clearFour + clearFive)
  }
  

  let clearOne = Number(clear1 * 0.6)
  let clearTwo = Number(clear2 * 0.75)
  let clearThree = Number(clear3 * 0.2)
  let clearFour = Number(clear4 * 0.35)
  let clearFive = Number(clear5 * 0.02)
  

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
       <h1>{sum}</h1>
      </MyModal>
      <MyInput
        onChange={(e) => setClear1(e.target.value)}
        value={clear1}
        placeholder="Кол-во банок 1 рейс"
      />
      <MyInput
        onChange={(e) => setClear2(e.target.value)}
        value={clear2}
        placeholder="Кол-во банок 2 рейс"
      />
      <MyInput
        onChange={(e) => setClear3(e.target.value)}
        value={clear3}
        placeholder="Кол-во 5л"
      />
      <MyInput
        onChange={(e) => setClear4(e.target.value)}
        value={clear4}
        placeholder="Кол-во 10л"
      />
      <MyInput
        onChange={(e) => setClear5(e.target.value)}
        value={clear5}
        placeholder="Сумма сопутки"
      />
      <MyButton onClick={handleClick}>Посчитать</MyButton>
    </div>
  )
}

export default App
