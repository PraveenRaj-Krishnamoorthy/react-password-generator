import { useState } from 'react'
import './App.css'
export default function App() {
  const [upp, setUpp] = useState(true)
  const [low, setLow] = useState(false)
  const [num, setNum] = useState(false)
  const [spl, setSpl] = useState(false)
  const [show, setShow] = useState("")
  const func = () => {
    let pass = ""
    let t = ""
    if (upp) {
      pass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (low) {
      pass += "abcdefghijklmnopqrstuvwxyz"
    }
    if (num) {
      pass += "0123456789"
    }
    if (spl) {
      pass += "!@#$%^&*()}{"
    }
    for (let i = 1; i <= 5; i++) {
      t += pass[Math.floor(Math.random() * pass.length)]
    }
    setShow(t)
  }
  return (
    <>
      <main>
        <label htmlFor='upp'>Upper: </label>
        <input type='checkbox' checked={upp} onChange={(e) => { setUpp(e.target.checked) }} id='upp' /> <br />
        <label htmlFor='low'>Lower: </label>
        <input type='checkbox' checked={low} onChange={(e) => { setLow(e.target.checked) }} id='low' /> <br />
        <label htmlFor='num'>Number: </label>
        <input type='checkbox' checked={num} onChange={(e) => { setNum(e.target.checked) }} id='num' /> <br />
        <label htmlFor='spl'>Special: </label>
        <input type='checkbox' checked={spl} onChange={(e) => { setSpl(e.target.checked) }} id='spl' /> <br />
        <button onClick={func}>Generate</button><br />
        {show}
      </main>
    </>
  )
}