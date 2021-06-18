import React from "react"
import { Link, graphql } from "gatsby"
import Button from "../components/button"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

const Faq = () => {

    return (
        <div>

            {/* Header */}
            <header>
                <div className="container">
                    <Navigation />
                    
                    <div className="showcase" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '100px 0',
                        margin: '0'
                    }}>
                        <h2 style={{
                            fontSize: '53px',
                            textAlign: 'center',
                            color: '#091841',
                            padding: '0',
                            margin: '0'
                        }}>Frequently Asked Questions</h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#71808E',
                            textAlign: 'center',
                            paddingTop: '24px',
                            paddingBottom: '24px'
                        }}>Below are a bunch of questions to help guide you in your buying decision. If you have any other questions, please reach out!</p>
                        <Link to={'/#contact'}>
                            <Button buttonText="Contact Us"/>
                        </Link>
                    </div>
                </div>
            </header>

            <div>
                <div className="container">
                    <div className="questions">
                        <h2>Can I see the window before I purchase it?</h2>
                        <p>Yes! We can have someone bring a sample to you for a quick look.</p>
                    </div>
                    <div className="questions">
                        <h2>Am I obligated to buy?</h2>
                        <p>No. This is so you can compare the window to others.</p>
                    </div>
                    <div className="questions">
                        <h2>How long is the estimate good for?</h2>
                        <p>Our policy has always been good for one year. Due to COVID, we had to add some stipulations. If you go to lumber yards you can see how many times and how big some price increases are.</p>
                    </div>
                    <div className="questions">
                        <h2>How can you sell at such lower prices than other companies?</h2>
                        <p>We operate with very low overhead, have no sales commissions, work with volume purchasing, and have very efficiently trained crews.</p>
                    </div>
                    <div className="questions">
                        <h2>Will I receive a long, high pressure sales pitch?</h2>
                        <p>As stated above, we eliminate the need to high pressure because we do not pay commissions. Because of our low prices we have a lot of demand, so, if you want to see the window before you purchase, it will be a quick demonstration. You can decide to purchase online without someone coming out to your home.</p>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )

}

export default Faq