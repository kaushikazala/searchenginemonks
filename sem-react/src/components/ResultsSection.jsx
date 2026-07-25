import "../style/ResultsSection.css";

const stats = [
  {
    value: "500+",
    title: "Projects Delivered",
    text: "Helping businesses across industries build stronger digital presence."
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    text: "Long-term partnerships built on transparency and measurable growth."
  },
  {
    value: "250M+",
    title: "Impressions Generated",
    text: "Driving visibility through SEO, advertising, and content marketing."
  },
  {
    value: "4.8x",
    title: "Average ROI",
    text: "Campaigns optimized to generate meaningful business returns."
  }
];

export default function ResultsSection() {
  return (
    <section className="results-section">
      <div className="container">

        <div className="section-header text-center">

          <span className="section-tag">
            OUR IMPACT
          </span>

          <h2>
            Numbers backed by real business growth
          </h2>

          <p>
            We measure success by the outcomes we create for our clients,
            not by vanity metrics.
          </p>

        </div>

        <div className="results-grid">

          {stats.map((item) => (

            <div
              className="result-card"
              key={item.title}
            >

              <h3>{item.value}</h3>

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}