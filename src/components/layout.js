/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import Header from "./header"
import "../styles/global-styles.css"

// const Layout = ({ children, header = "" }) => (
//   <div className="container">
//     <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1561038903/Question-set/Header_1.jpg" />
//     <main>
//       <h1>{header}</h1>
//       <div className="questions-wrapper">{children}</div>
//     </main>
//   </div>
// )

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.addCar = this.addCar.bind(this)

    this.state = {
      cars: 0,
      drivers: 0,
    }
  }

  addCar() {
    console.log("Click")
    const newCars = this.state.cars + 1
    console.log(newCars)
    this.setState(
      {
        cars: newCars,
      },
      () => console.log(this.state.cars)
    )
  }

  render() {
    const backGround = this.props.bg || "#eee"
    const childrenwProps = React.Children.map(this.props.children, child => {
      if (child.props.id == "addCarButton") {
        return React.cloneElement(child, { action: this.addCar })
      } else {
        return React.cloneElement(child)
      }
    })
    return (
      <div className="container" style={{ backgroundColor: backGround }}>
        <Header image={this.props.headerImage} />
        <main>
          <h1>{this.props.header}</h1>
          <div className="questions-wrapper">{childrenwProps}</div>
        </main>
      </div>
    )
  }
}

export default Layout
