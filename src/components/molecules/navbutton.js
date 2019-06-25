import { Link } from "gatsby"
import React from "react"

const Navbutton = ({ to = "#", type, cta, id, action }) => (
  <Link to={to}>
    <button id={id} className={type} onClick={action}>
      {cta}
    </button>
  </Link>
)

export default Navbutton
