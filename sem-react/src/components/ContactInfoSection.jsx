import "../style/ContactInfoSection.css";
import Reveal from "./Reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    value: "Toronto, Ontario",
    subtext: "Serving clients across Canada & Worldwide",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+1 (234) 567-890",
    subtext: "Mon – Fri • 9:00 AM – 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "hello@searchenginemonks.com",
    subtext: "We'll reply within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday – Friday",
    subtext: "9:00 AM – 6:00 PM",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="contact-info-section">

      <div className="container">

        <Reveal>
          <div className="contact-info-header">

            <span className="contact-info-tag">
              GET IN TOUCH
            </span>

            <h2>
              Multiple Ways To
              <span> Reach Us</span>
            </h2>

            <p>
              Choose the communication method that works best for you.
              We're always happy to discuss your ideas and answer your
              questions.
            </p>

          </div>
        </Reveal>

        <div className="contact-info-grid">

          {contactInfo.map((item, index) => {

            const Icon = item.icon;

            return (

              <Reveal key={index}>

                <div className="contact-info-card">

                  <div className="contact-info-icon">
                    <Icon size={32} />
                  </div>

                  <h3>{item.title}</h3>

                  <h4>{item.value}</h4>

                  <p>{item.subtext}</p>

                </div>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>
  );
}