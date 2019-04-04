import React, { Component } from "react"
import AnimateHeight from "react-animate-height"
import Qselect from "./q_select"
// const Qrevealer = ({ question, id }) => (
//   <div className="qwrap">
//     <label htmlFor={id}>{question}</label>
//     <input id={id} type="text" />
//   </div>
// )

class Qrevealer extends Component {
  state = {
    height: 0,
  }

  open = () => {
    this.setState({
      height: "auto",
    })
  }

  // var {id, question} = this.props;

  render() {
    return (
      <div className="qwrap qwrap-revealer">
        <label htmlFor={this.props.id}>{this.props.question}</label>
        <div className="inline-form-field">
          <input id={this.props.id} type="text" />
          <button onClick={this.open}>Submit</button>
        </div>
        <AnimateHeight
          duration={500}
          height={this.state.height} // see props documentation bellow
        >
          <Qselect
            id={this.props.selectId}
            question={this.props.selectQ}
            options={this.props.selectOptions}
          />
        </AnimateHeight>
      </div>
    )
  }
}

export default Qrevealer
