import "./Dashboard.css";

export default function WebDesignDashboard() {
  return (
    <div className="dashboard-card browser-dashboard">

      {/* Browser Header */}
      <div className="browser-header">
        <div className="browser-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-address">
          www.searchenginemonks.com
        </div>
      </div>

      {/* Browser Body */}
      <div className="browser-body">

        <div className="hero-preview">
          <div className="hero-text">
            <div className="line large"></div>
            <div className="line"></div>
            <div className="line short"></div>

            <button>Get Started</button>
          </div>

          <div className="hero-image"></div>
        </div>

        <div className="service-grid">

          <div className="service-box"></div>
          <div className="service-box"></div>
          <div className="service-box"></div>

        </div>

      </div>

      {/* Floating Cards */}

      <div className="floating-ui ui-performance">
        ⚡ 98 Performance
      </div>

      <div className="floating-ui ui-mobile">
        📱 Responsive
      </div>

      <div className="floating-ui ui-design">
        🎨 Modern UI
      </div>

    </div>
  );
}