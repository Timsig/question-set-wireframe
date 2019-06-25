import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
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
import { checkPropTypes } from "prop-types"

const Carquestions = () => (
  <Layout
    headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561038643/Question-set/car-search-results_Fiesta.jpg"
    bg="#fff"
  >
    <h3>Tell us more about this car</h3>
    <Qselect
      question="When was this car bought?"
      options={[
        "--Please select--",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ]}
    />
    <Qselect
      question="What's this car's estimated annual mileage?"
      options={[
        "--Please select--",
        "0-1000",
        "1,001 - 2,000",
        "2,001 - 3,000",
        "3,001 - 4,000",
        "4,001 - 5,000",
        "6,001 - 7,000",
        "7,001 - 8,000",
        "8,001 - 9,000",
        "9,001 - 10,000",
        "10,001 - 11,000",
        "11,001 - 12,000",
        "12,001 - 13,000",
        "13,001 - 14,000",
        "14,001 - 15,000",
        "15,001 - 16,000",
        "16,001 - 17,000",
        "17,001 - 18,000",
        "18,001 - 19,000",
        "19,001 - 20,000",
        "20,001 - 25,000",
        "25,001 - 30,000",
        "30,001 - 35,000",
        "35,001 - 40,000",
        "40,001 - 45,000",
        "45,001 - 50,000",
        "50,000+",
      ]}
    />
    <Qselect
      question="Where is the car kept overnight?"
      options={[
        "Drive",
        "Garage",
        "Road",
        "Secure Car Park",
        "Unsecure Car Park",
      ]}
    />
    <Qcheckbox
      question="Does this car have any of the following safety features? (We already know about the AEB)."
      options={["Parking/reversing sensors", "Dash cam"]}
    />

    <section className="prepop-questions">
      <h4>Please check the following statements</h4>
      <Qprepop
        id="mods"
        textbefore="Apart from the safety feaures you've already told us about, the car"
        options={["has not", "has"]}
        textafter="been modified."
      />
      <Qprepop
        id="kept@home"
        textbefore="The car"
        options={["is", "is not"]}
        textafter="ususally kept at my home address overnight."
      />
    </section>

    <Navbutton
      to="/car-build-0-0-b"
      type="primary btn-block"
      cta="Add car"
      id="addCarButton"
    />
  </Layout>
)

export default Carquestions
