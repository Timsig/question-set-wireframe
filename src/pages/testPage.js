import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
// import Qselectclass from "../components/q_select-class"
import Qprepop from "../components/q_prepop"
// import Image from "../components/image"
// import SEO from "../components/seo"

const testPage = () => (
  <Layout header="About you">
    <Qcheckbox
      id="todo"
      question="Tick all that you would like to do"
      options={["Buy yacht", "Achieve my potential", "Break bad"]}
    />
    <Qrevealer
      id="postcode"
      question="Enter your postcode"
      selectId="address"
      selectQ="Please choose your address"
      selectOptions={["1 Amazing Road", "2 Amazing Road", "3 Amazing Road"]}
    />
    <Qyesno id="yesOrNo" question="Will you marry me?" />
    <Qbuttons
      id="buttons"
      question="What's your favourite flavour of crisps?"
      options={["Salted", "Salt & vinegar", "Cheese & Onion", "Prefer peanuts"]}
    />
    <Qtext id="firstName" question="First name" />
    <Qselect id="pet" question="Your pet" options={["dog", "cat", "bee"]} />
    <section className="prepop-questions">
      <Qprepop
        id="mortgage"
        textbefore="The home is"
        options={["Owned with a mortgage", "Owned outright", "Rented"]}
        textafter="or is it?"
      />
      <Qprepop
        id="walls"
        textbefore="The walls are made of"
        options={["Brick", "Wood", "Concrete"]}
      />
    </section>
  </Layout>
)
export default testPage
