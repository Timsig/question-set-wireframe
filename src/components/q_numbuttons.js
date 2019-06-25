import React from "react"

const Qnumbuttons = ({ id, question, options }) => (
  <div className="qwrap inline-radio-group numbers">
    <p className="question">{question}</p>
    {options.map(option => {
      return (
        <div key={option}>
          <input type="radio" id={option} name={id} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      )
    })}
  </div>
)

export default Qnumbuttons
