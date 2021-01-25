import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProcedureSection from "../components/procedureSection"
import Affordability from "../components/affordability"
import WindowOptions from "../components/windowOptions"
import Showcase from "../components/showcase"

const Homepage = () => (
  <Layout>
    
    <SEO title="Affordable windows with the smallest payment!" />

    <Showcase showcaseTitle="Finally, online shopping without all the hassle!" showcaseInfo="Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!" smallLinkText="Let us discuss your options" />

    <ProcedureSection />

    <Affordability />

    <WindowOptions />

  </Layout>
)

export default Homepage
