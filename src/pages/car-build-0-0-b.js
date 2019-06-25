import React from "react"
import Hotspot from "../components/hotspot"
import { Link } from "gatsby"

import Layout from "../components/layout"

const CarBuild1 = () => (
  <Layout headerImage="https://res.cloudinary.com/lwcqviihu/image/upload/v1561031571/Question-set/C20_Build_policy_b.jpg">
    <Link to="/car-questions">
      <Hotspot left={161} top={253} width={130} height={39} />
    </Link>
  </Layout>
)

export default CarBuild1
