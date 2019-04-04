import React from "react"

const Qtext = ({ question, id }) => (
  <div className="qwrap qwrap-text">
    <label htmlFor={id}>{question}</label>
    <input id={id} type="text" />
  </div>
)

export default Qtext
