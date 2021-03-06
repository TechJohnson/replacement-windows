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

    <div className="formBackground">
      <div className="container">
        <div style={{
        paddingBottom: '100px',
        }}>
          <h2 style={{textAlign: 'center'}}>Let's get in touch</h2>
          <p style={{textAlign: 'center'}}>Shoot us a quick email to gather some more information</p>

          <form name="Homepage" id="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="Homepage" value="Homepage" />
            <div className="inputArea">
              <div className="inputs">
                <input type="text" name="name" id="name" placeholder="name" required/>
              </div>
              <div className="inputs">
                <input type="email" name="email" id="email" placeholder="email" required/>
              </div>
              <div className="inputs">
                <input type="tel" name="number" id="number" placeholder="phone" required/>
              </div>
            </div>
            <div className="messsage">
              <textarea name="message" placeholder="Which window would you like more information about?" required></textarea>
            </div>
              <button className="submit-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>

  </Layout>
)

export default Homepage
