import "../style/RecommendationList.css";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function RecommendationList({ auditData }) {
  if (!auditData) return null;

  return (
    <section className="recommendation-section">
      <div className="container">
        <div className="recommendation-header">
          <span className="recommendation-badge">
            Recommended Improvements
          </span>

          <h2>Action Plan</h2>

          <p>
            Based on your audit, here are the most impactful improvements for
            your website.
          </p>
        </div>

        <div className="recommendation-list">
          {auditData.recommendations?.map((item, index) => (
            <div
              className="recommendation-item"
              key={`${item.title}-${index}`}
            >
              {/* Left Icon */}
              <div className="recommendation-icon">
                <CheckCircle2 size={22} />
              </div>

              {/* Center Content */}
              <div className="recommendation-content">
                <div className="recommendation-top">
                  <span
                    className={`priority ${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>

                  <span className="category">
                    {item.category}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              {/* Right Arrow */}
              <div className="recommendation-arrow">
                <ArrowUpRight size={22} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}