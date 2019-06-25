import { Link } from "gatsby"
import React from "react"
// import Navbutton from "../components/molecules/navbutton"

const Footer = ({ children, bg = "#eee", addcar }) => (
  <footer onClick={addcar} style={{ backgroundColor: bg }}>
    {children}
  </footer>
)

export default Footer

// import { Link } from "gatsby"
// import React from "react"
// // import Navbutton from "../components/molecules/navbutton"

// const Footer = ({ children, bg = "#eee", addCar = "" }) => {
//   const childrenwProps = React.Children.map(this.props.children, child =>
//     React.cloneElement(child, { addCar: addCar })
//   )
// }
// return <footer style={{ backgroundColor: bg }}>{childrenwProps}</footer>

// export default Footer
