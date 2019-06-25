import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild1 = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561020980/Question-set/C2.0_Build_policy.jpg">
    <Link to="/policy-holder">
      <Hotspot left={31} top={400} width={222} height={39} />
    </Link>
    <Link to="/car-build-0-0-b">
      <Hotspot left={31} top={252} width={120} height={39} />
    </Link>
    {/* <img
        src="https://res.cloudinary.com/lwcqviihu/image/upload/v1561020980/Question-set/C2.0_Build_policy.jpg"
        alt=""
      /> */}
  </Layout>
)

export default CarBuild1
