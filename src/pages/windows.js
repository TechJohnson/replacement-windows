import React from "react"
import { useStaticQuery } from "gatsby"
import Footer from "../components/footer"
import Navigation from "../components/navigation"
import Button from "../components/button"
import Img from "gatsby-image"
import WindowOptions from "../components/windowOptions"

const AffordabilityPage = () => {
    const data = useStaticQuery(graphql`
        query {
            outWindow: file(relativePath: { eq: "looking-out-window.png" }) {
                childImageSharp {
                    fluid(maxWidth: 587) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (

        <div>

            {/* Header */}
            <header>
                <div className="container">
                    <Navigation />
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '100px 0', margin: '0'}}>
                        <h1 style={{textAlign: 'center', fontSize: '53px', color: '#091841'}}>Windows for every budget</h1>
                        <p style={{textAlign: 'center', fontSize: '18px', lineHeight: '2', color: '#71808E', padding: '30px 0'}}>Affordable windows and doors. No long demo, no pushy salesman, no huge markup. Affordable windows with the smallest payment!</p>
                        <Button buttonText="Let's Get Started" />
                    </div>
                </div>
            </header>


            {/* Options */}
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto auto'
                }}>
                    <div>
                        <h4>Economy</h4>
                    </div>
                    <div>
                        <h4>Good</h4>
                    </div>
                    <div>
                        <h4>Better</h4>
                    </div>
                    <div>
                        <h4>Best</h4>
                    </div>
                </div>
            </div>

            <WindowOptions />

    
            <Footer />
            
        </div>

    )


}


export default AffordabilityPage