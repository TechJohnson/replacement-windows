import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProcedureSection from "../components/procedureSection"
import Affordability from "../components/affordability"
import WindowOptions from "../components/windowOptions"

const Homepage = () => (
  <Layout>
    
    <SEO title="Affordable windows with the smallest payment!" />

    <ProcedureSection />

    <Affordability />

    <WindowOptions />

  </Layout>
)

export default Homepage
