import "./Dashboard.css";

export default function BrandingDashboard() {
  return (
    <div className="dashboard-card branding-dashboard">

      <div className="dashboard-browser">
        <div className="browser-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-search">
          Brand Guidelines
        </div>
      </div>

      <div className="branding-grid">

        <div className="branding-box logo-box">
          <div className="brand-logo">M</div>
          <h5>Primary Logo</h5>
        </div>

        <div className="branding-box business-card">
          <div className="card-top"></div>
          <div className="card-line long"></div>
          <div className="card-line short"></div>
          <span>Business Card</span>
        </div>

        <div className="branding-box colors-box">
          <div className="palette">
            <span className="green"></span>
            <span className="gold"></span>
            <span className="cream"></span>
            <span className="dark"></span>
          </div>
          <span>Color Palette</span>
        </div>

        <div className="branding-box typography-box">
          <h2>Aa</h2>
          <p>Poppins</p>
          <small>Bold • Medium • Regular</small>
        </div>

        <div className="branding-box social-box">
          <div className="social-post">
            <div className="social-img"></div>
            <div className="card-line long"></div>
            <div className="card-line short"></div>
          </div>
          <span>Social Design</span>
        </div>

        <div className="branding-box mockup-box">
          <div className="mockup-circle"></div>
          <div className="mockup-card"></div>
          <span>Brand Mockup</span>
        </div>

      </div>

    </div>
  );
}