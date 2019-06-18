import React from "react"

const Prepop = ({ id, textbefore = "", textafter = "", options }) => (
  <div className="prepop-wrap">
    <p>{textbefore}</p>
    <select id={id}>
      {options.map(option => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        )
      })}
    </select>
    <p>{textafter}</p>
  </div>
)

export default Prepop
