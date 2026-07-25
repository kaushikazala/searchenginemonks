import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { faqs } from '../data/content.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-premium">
      <div className="container">

        {/* Header */}
        <div className="text-center">
          <Reveal as="span" className="section-tag">Questions</Reveal>
          <Reveal as="h2" className="section-title mt-3" delay={1}>Frequently asked questions</Reveal>
          <Reveal as="p" className="section-subtitle" delay={1}>
            Straight answers before you get in touch — no jargon, no fine print.
          </Reveal>
        </div>

        {/* FAQ Layout: list + side card */}
        <div className="faq-inner-wrap">

          {/* FAQ Accordion */}
          <div className="faq-list-premium">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal
                  as="div"
                  className={`faq-item-premium${isOpen ? ' faq-open' : ''}`}
                  key={item.q}
                  delay={i % 3}
                >
                  <button
                    type="button"
                    className="faq-question-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className="faq-q-num">0{i + 1}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-q-icon">
                      <i className={isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus'}></i>
                    </span>
                  </button>
                  <div className={`faq-answer${isOpen ? ' faq-answer-open' : ''}`}>
                    <p>{item.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Side Card */}
          <Reveal className="faq-side-card" delay={2}>
            <div className="fsc-icon"><i className="fa-solid fa-comments"></i></div>
            <h4>Still have questions?</h4>
            <p>Our team is happy to answer any questions before you commit to anything.</p>
            <a href="#contact" className="btn btn-primary-premium fsc-btn">
              Chat With Us <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
            <div className="fsc-trust">
              <i className="fa-solid fa-shield-halved"></i>
              <span>No contracts. No pressure. Just honest advice.</span>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
