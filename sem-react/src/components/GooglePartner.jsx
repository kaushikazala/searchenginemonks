import "../style/GooglePartner.css";

export default function GooglePartner() {
  return (
    <section className="google-partner">
      <div className="container partner-wrapper">

        <div className="partner-image">

          <img
            src="/images/google-partner.png"
            alt="Google Premier Partner"
          />

        </div>

        <div className="partner-content">

          <span className="partner-badge">
            Trusted by Google
          </span>

          <h2>
            Search Engine Monks is a Google Premier Partner
          </h2>

          <p>
            As a certified Google Premier Partner, we help Canadian businesses
            grow through proven SEO strategies, Google Ads expertise, and
            measurable digital marketing campaigns.
          </p>

          <ul>

            <li>✔ Certified Google Ads Specialists</li>

            <li>✔ Proven SEO Experts</li>

            <li>✔ 500+ Successful Campaigns</li>

            <li>✔ Transparent Reporting</li>

          </ul>

          <button className="partner-btn">
            Work With Experts
          </button>

        </div>

      </div>
    </section>
  );
}