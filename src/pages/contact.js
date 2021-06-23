import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/showcase"
import "../style/layout.css" // Default Gatsby styling
import "../style/style.css" // Custom styling


const Contact = () => (
  <Layout>
    
    <SEO title="Contact" />

    <Showcase showcaseTitle="Give us a call" showcaseInfo="Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!" smallLinkText="Let us discuss your options" />

  </Layout>
)

export default Contact
