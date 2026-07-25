import "../style/SEODashboard.css";
//abc

export default function SEODashboard() {
  return (
    <div className="seo-dashboard">

      <div className="dashboard-header">
        <div>
          <h4>SEO Performance</h4>
          <span>Last 30 Dayss</span>
        </div>

        <div className="status">
          ● Live
        </div>
      </div>

      {/* Graph */}

      <div className="graph">
        <svg viewBox="0 0 320 140">
          <path
            d="M10 110
               C60 90 80 70 120 80
               S190 20 230 40
               S280 90 310 20"
          />
        </svg>
      </div>

      {/* Metrics */}

      <div className="metric-grid">

        <div className="metric">
          <h3>+250%</h3>
          <p>Organic Traffic</p>
        </div>

        <div className="metric">
          <h3>#1</h3>
          <p>Google Ranking</p>
        </div>

        <div className="metric">
          <h3>1.2K</h3>
          <p>Keywords</p>
        </div>

        <div className="metric">
          <h3>98%</h3>
          <p>SEO Score</p>
        </div>

      </div>

    </div>
  );
}