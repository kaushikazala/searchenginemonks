import { useState } from "react";
import "../style/ServicesFAQ.css";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3–6 months depending on competition and website health.",
  },
  {
    question: "Do you only work with Canadian businesses?",
    answer:
      "No. While we specialize in helping businesses across Canada, we also work with companies worldwide.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign your current website while improving performance, user experience, and conversions.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We've worked with local businesses, healthcare, real estate, eCommerce, finance, education, and many more.",
  },
  {
    question: "Do you provide AI automation services?",
    answer:
      "Yes. We build AI chatbots, workflow automations, CRM integrations, and business process automation solutions.",
  },
  {
    question: "Can I choose only one service?",
    answer:
      "Of course. You can hire us for a single service like SEO or Web Design, or combine multiple services for maximum growth.",
  },
];

export default function ServicesFAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="services-faq">
      <div className="container">

        <span className="faq-tag">
          Frequently Asked Questions
        </span>

        <h2>
          Everything You Need to Know
        </h2>

        <p>
          Have questions about our services? We've answered the most common
          ones below.
        </p>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${active === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >
                {faq.question}

                <ChevronDown size={20} />
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}