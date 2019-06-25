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
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"
import Licence from "../components/q_licence"
import Qnumbuttons from "../components/q_numbuttons"
// import Image from "../components/image"
// import SEO from "../components/seo"

const MoreAboutYou = () => (
  <Layout header="Your driving">
    <Licence queston="Please enter the last 5 digits of the policyholders licence number, if you know it." />
    <Qnumbuttons
      question="How many cars and/or vans do you have in your household?"
      options={["1", "2", "3", "3+"]}
    />
    <section className="prepop-questions">
      <Qprepop
        id="claimsAccidents"
        textbefore="Tom"
        options={["has not", "has"]}
        textafter="had any claims or accidents in the last five years, including while insured with us."
      />
    </section>
    <Footer>
      <Navbutton
        type="primary btn-block"
        to="/car-build-0-0"
        cta="Add driver"
      />
    </Footer>
  </Layout>
)

export default MoreAboutYou
