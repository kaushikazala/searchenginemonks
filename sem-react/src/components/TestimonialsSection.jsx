import "../style/TestimonialsSection.css";
import Reveal from "./Reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Maple Growth Agency",
    initials: "SJ",
    review:
      "Search Engine Monks completely transformed our online presence. The team was responsive, creative, and delivered beyond expectations.",
  },
  {
    name: "Michael Carter",
    company: "NovaTech Solutions",
    initials: "MC",
    review:
      "Their attention to detail and modern design approach helped us launch a website that truly represents our brand.",
  },
  {
    name: "Emily Brown",
    company: "Urban Realty",
    initials: "EB",
    review:
      "Professional, transparent, and incredibly easy to work with. The final product exceeded our expectations in every way.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">

        <Reveal>
          <div className="testimonials-header">

            <span className="testimonials-tag">
              TESTIMONIALS
            </span>

            <h2>
              What Our
              <span> Clients Say</span>
            </h2>

            <p>
              We believe great partnerships create great results.
              Here's what our clients have to say about working with
              Search Engine Monks.
            </p>

          </div>
        </Reveal>

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (

            <Reveal key={index}>

              <div className="testimonial-card">

                <div className="testimonial-stars">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="testimonial-text">
                  "{testimonial.review}"
                </p>

                <div className="testimonial-user">

                  <div className="testimonial-avatar">
                    {testimonial.initials}
                  </div>

                  <div>

                    <h4>{testimonial.name}</h4>

                    <span>{testimonial.company}</span>

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}