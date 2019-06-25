import React from "react"

const Prepop = ({ id, textbefore = "", textafter = "", options }) => (
  <div className="prepop-wrap">
    <p>
      <span>{textbefore}</span>
      <select id={id}>
        {options.map(option => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          )
        })}
      </select>
      <span>{textafter}</span>
    </p>
  </div>
)

export default Prepop
