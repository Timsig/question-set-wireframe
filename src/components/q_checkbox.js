import React from "react"

const Qcheckbox = ({ id, question, options }) => (
  <div className="qwrap qwrap-checkbox">
    <p className="question">{question}</p>
    {options.map(option => {
      return (
        <div key={option} className="checkbox-wrap">
          <input type="checkbox" id={option} name={id} value={option} />
          <label htmlFor={option}>{option}</label>
        </div>
      )
    })}
  </div>
)

export default Qcheckbox
