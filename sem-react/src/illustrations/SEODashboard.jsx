    import "./Dashboard.css";

export default function SEODashboard() {
  return (
    <div className="dashboard-card seo-dashboard">
      <div className="dashboard-top">
        <div>
          <h4>SEO Performance</h4>
          <p>Last 30 Days</p>
        </div>

        <span className="live-badge">● Live</span>
      </div>

      <div className="graph-area">
        <svg viewBox="0 0 320 150">
          <path
            d="M10 120
               C70 100 90 70 140 80
               S220 20 310 40"
          />
        </svg>
      </div>
<div className="service-visual">
      <div className="metrics">
        <div className="metric-card">
          <h3>+250%</h3>
          <span>Organic Traffic</span>
        </div>

        <div className="metric-card">
          <h3>#1</h3>
          <span>Google Ranking</span>
        </div>

        <div className="metric-card">
          <h3>1.2K</h3>
          <span>Keywords</span>
        </div>

        <div className="metric-card">
          <h3>98%</h3>
          <span>SEO Score</span>
        </div>
        
</div>
</div>
      </div>  
  );
}