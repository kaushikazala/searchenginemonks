import "../style/OverallScore.css";


export default function OverallScore({ auditData }) {
     if (!auditData) return null;
  return (
    <section className="overall-score">
      <div className="container">

        <div className="overall-score-wrapper">

          <div className="overall-score-circle">

            <span className="score-number">
              {auditData.overall}
            </span>

            <span className="score-text">
              Overall Score
            </span>

          </div>

          <div className="overall-score-content">

            <span className="audit-badge">
              Website Health
            </span>

            <h2>
               Your Website Is In Great Shape
            </h2>

            <p>
              We analyzed your website across SEO, performance,
              accessibility, mobile responsiveness, and best
              practices. Below is a detailed breakdown along with
              recommendations for further improvement.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}