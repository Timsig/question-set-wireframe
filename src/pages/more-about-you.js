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
// import Image from "../components/image"
// import SEO from "../components/seo"

const MoreAboutYou = () => (
  <Layout
    header="Tell us a bit more about you"
    headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561038903/Question-set/Header_1.jpg"
  >
    <Qselect
      id="maritalStatus"
      question="What is your marital status"
      options={[
        "Married",
        "Single",
        "Divorced",
        "Widowed",
        "Living with partner",
        "Separated",
      ]}
    />
    <Qyesno id="ownHome" question="Do you own your home?" />
    <Qbuttons
      id="employment"
      question="What is your employment status?"
      options={["Employed", "Self-employed", "Retired", "Other"]}
    />
    <section className="prepop-questions">
      <Qprepop
        id="UKresident"
        textbefore="You have been a UK resident for"
        options={[
          "more than 3 years",
          "2-3 years",
          "1-2 years",
          "Less than a year",
        ]}
      />
      <Qprepop
        id="convictions"
        textbefore="You, the people living with you, and those named on this policy"
        options={["do not", "do"]}
        textafter="have any unspent criminal convictions"
      />
    </section>
    <Footer>
      <div className="navrow">
        <Navbutton type="primary" to="/car-build-0-0" cta="Next >" />
        <Navbutton type="secondary" to="/" cta="< Back" />
      </div>
      <div className="saverow">
        <Navbutton type="secondary" cta="Save" />
      </div>
    </Footer>
  </Layout>
)

export default MoreAboutYou
