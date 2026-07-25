import "./Dashboard.css";

export default function MarketingDashboard() {
  return (
    <div className="dashboard-card marketing-dashboard">

      <div className="dashboard-browser">
        <div className="browser-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-search">
          Campaign Dashboard
        </div>
      </div>

      <div className="campaign-card">

        <div className="campaign-header">
          <div className="campaign-icon">📢</div>

          <div>
            <h4>Marketing Campaign</h4>
            <p>Google • Meta • LinkedIn</p>
          </div>
        </div>

        <div className="campaign-progress">
          <div className="progress-fill"></div>
        </div>

      </div>

      <div className="marketing-metrics">

        <div className="metric-box">
          <h4>CTR</h4>
          <span>6.8%</span>
        </div>

        <div className="metric-box">
          <h4>Leads</h4>
          <span>1.4k</span>
        </div>

        <div className="metric-box">
          <h4>ROAS</h4>
          <span>4.9x</span>
        </div>

      </div>

      <div className="marketing-chart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="dashboard-footer">
        🚀 Campaign Running
      </div>

    </div>
  );
}