import { useState } from "react";
import "../style/FAQAccordion.css";
import Reveal from "./Reveal";
import { Plus, Minus } from "lucide-react";
import { faqData } from "../data/faqData";

export default function FAQAccordion() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (categoryIndex, questionIndex) => {
    const id = `${categoryIndex}-${questionIndex}`;

    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section
      className="faq-accordion-section"
      id="faq-accordion"
    >
      <div className="container">

        {faqData.map((category, categoryIndex) => (

          <Reveal key={category.category}>

            <div className="faq-category">

              <h2 className="faq-category-title">
                {category.category}
              </h2>

              <div className="faq-list">

                {category.questions.map((item, questionIndex) => {

                  const id = `${categoryIndex}-${questionIndex}`;

                  const isOpen = activeItem === id;

                  return (

                    <div
                      key={questionIndex}
                      className={`faq-item ${isOpen ? "active" : ""}`}
                    >

                      <button
                        className="faq-question"
                        onClick={() =>
                          toggleItem(categoryIndex, questionIndex)
                        }
                      >

                        <span>{item.question}</span>

                        <div className="faq-icon">

                          {isOpen ? (
                            <Minus size={20} />
                          ) : (
                            <Plus size={20} />
                          )}

                        </div>

                      </button>

                      <div
                        className={`faq-answer-wrapper ${
                          isOpen ? "open" : ""
                        }`}
                      >

                        <div className="faq-answer">

                          <p>{item.answer}</p>

                        </div>

                      </div>

                    </div>

                  );
                })}

              </div>

            </div>

          </Reveal>

        ))}

      </div>
    </section>
  );
}