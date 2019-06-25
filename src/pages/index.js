import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import Licence from "../components/q_licence"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout
    header="Tell us about you"
    headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561038903/Question-set/Header_1.jpg"
  >
    <Qbuttons
      id="title"
      question="Title"
      options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
    />
    <Qtext id="firstName" question="First name" />
    <Qtext id="surName" question="Surname" />
    <Qdate id="DOB" question="Date of birth" />
    <Qrevealer
      id="Address"
      question="Your home address"
      selectId="address"
      selectQ="Please choose your address"
      selectOptions={["1 Amazing Road", "2 Amazing Road", "3 Amazing Road"]}
    />
    <Qtext id="email" question="Email address for your documents" />

    <Footer>
      <div className="navrow">
        <Navbutton type="primary" to="/more-about-you" cta="Next >" />
      </div>
      <div className="saverow">
        <Navbutton type="secondary" cta="Save" />
      </div>
    </Footer>
  </Layout>
)

export default IndexPage
