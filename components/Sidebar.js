import { useState } from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const [input, setinput] = useState('')
  const state = useSelector((state) => state)

  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <div className="sidebar__title">
          <h1>Exhange Rates</h1>
          <h3>(Base : {state.base})</h3>
        </div>
        <div className="sidebar__form">
          <img src="/search.svg" />
          <input value={input} onChange={(e) => setinput(e.target.value)} />
        </div>
      </div>
      <div className="sidebar__listContainer">
        {state.options.map((option, key) => {
          if (!input || option.includes(input.toUpperCase())) {
            return (
              <div className="sidebar__list" key={key}>
                <span>{option}</span>
                <span>{state.rates[option]}</span>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Sidebar
