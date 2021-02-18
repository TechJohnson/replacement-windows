import React from "react"
import Button from "../components/button"
import SEO from "../components/seo"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      lost: file(relativePath: { eq: "404-lost.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (

  <div style={{
    background: 'rgb(247, 250, 253)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }}>

  <SEO title="Uh oh! It looks like we can't find that page." />


    <div className="container">

      <div>
        <Img fixed={data.lost.childImageSharp.fixed} />
        <h1 style={{fontWeight: '600', paddingBottom: '25px', fontSize: '55px'}}>Uh oh! Are you lost?</h1>
        <p style={{marginBottom: '25px'}}>The page you requested could not be found. We suggest going back to the homepage.</p>
        <Link to={'/'}>
          <Button buttonText="Go Home"/>
        </Link>
      </div>

    </div>

  </div>

  )
  
}

export default NotFoundPage
