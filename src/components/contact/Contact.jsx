import "./contact.css"
import Card from"./card"
import { MdOutlineLocationOn } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
function Contact()
{

    return(
        <section id="contact" className="contact-section width85" >
            <div className="contact-div1 popin">
                <p>CONTACT</p>
                <h2>Get in Touch with Me!</h2>
            </div>
            <div className="contact-div2">
                <div className="contact-detail popin">
                    <Card
                        icon={ MdOutlineLocationOn }
                        detail1="Our office:"
                        detail2="Dehradun,India"
                    />
                    <Card
                        icon={ PiPhoneCall }
                        detail1="Contact Number:"
                        detail2="+123456789"
                    />
                    <Card
                        icon={ HiOutlineMail }
                        detail1="Email Us:"
                        detail2="websitename@mail.com"
                    />
                </div>
                <div className="contact-message popin">
                    <div className="name">
                        <span>Full Name</span>
                        <input className="input" type="text" placeholder="Steve Milner" />
                    </div>
                    <div className="email">
                        <span>Email Address</span>
                        <input className="input" type="text" placeholder="websitename@mail.com" />
                    </div>
                    <div>
                        <span>Your Message</span>
                        <textarea className="input" rows={4} placeholder="Write Your Message" />
                    </div>
                    <div>
                        <button>Send Message <HiOutlineMail size={25}/></button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;