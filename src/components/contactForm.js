import React from "react"

const ContactForm = () => {

    return (

        <div style={{
            paddingBottom: '100px;',
        }}>
            <h2 style={{textAlign: 'center'}}>Let's get in touch</h2>
            <p style={{textAlign: 'center'}}>Shoot us a quick email to gather some more information</p>
            {/* <form name="contact" method="POST" data-netlify="true">
                <div className="inputArea">
                    <div className="inputs">
                        <input type="text" name="name" placeholder="name"/>
                    </div>
                    <div className="inputs">
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className="inputs">
                        <input type="tel" name="number" placeholder="phone"/>
                    </div>
                </div>
                <div className="messsage">
                    <textarea name="message" placeholder="Which window would you like more information about?"></textarea>
                </div>
                <button class="submit-btn" type="submit">Send Message</button>
            </form> */}
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                    </select></label>
                </p>4
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
    
}

export default ContactForm