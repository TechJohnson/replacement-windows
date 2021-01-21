import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProcedureSection from "../components/procedureSection"
import Affordability from "../components/affordability"

const IndexPage = () => (
  <Layout>
    
    <SEO title="Affordable windows with the smallest payment!" />

    <ProcedureSection />

    <Affordability />

  </Layout>
)

export default IndexPage
