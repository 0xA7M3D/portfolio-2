
import "./contacts.css"
function Contacts(){
    return(

          <div className="contact">
            <div className="contact-title">
                <p className="title-cont title-main-all">
                    Contact Me
                </p>
                <p className="desc-contact">
                    Let's talk about your ideas, projects or anything else
                </p>
            </div>
            <hr className="line-projects" />
            <form
                action="https://formspree.io/f/mnjbywwl"
                method="POST" >
    
                <div className="inputs">


                    <div className="inp">
                        <p>YourName*</p>
                        <input required type="text" name="name" placeholder="Ahmed.."/>
                        <small></small>
                    </div>
                    <div className="inp">
                        <p>Email*</p>
                        <input required type="email" name="email" placeholder="ahmed@gmail.com"/>
                        <small></small>
                    </div>
                    <div className="inp">
                        <p>Phone*</p>
                        <input required type="text" name="phone-number" placeholder="123-456-789"/>
                        <small></small>
                    </div>
                    <div className="inp">
                        <p>subject*</p>
                        <input required type="text" name="lable" placeholder="Subjct of ur message.."/>
                        <small></small>
                    </div>
                    <div className="inp">
                        <p>Message*</p>
                        <textarea required type="text" name="message" placeholder="Lets work toghter!"/> 
                        <small></small>
                    </div>

                    <button type="submit">Send</button>


                </div>

            </form>
          </div>


    )
      
    
}

export default Contacts;