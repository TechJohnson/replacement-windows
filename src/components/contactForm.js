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
            <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>

    )
    
}

export default ContactForm