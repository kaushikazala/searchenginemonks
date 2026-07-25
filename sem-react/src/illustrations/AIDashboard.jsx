import "./Dashboard.css";

export default function AIDashboard() {
  return (
    <div className="dashboard-card ai-dashboard">

      <div className="dashboard-browser">
        <div className="browser-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-search">
          AI Assistant Dashboard
        </div>
      </div>

      <div className="ai-chat-card">
        <div className="ai-avatar">🤖</div>

        <div className="chat-content">
          <div className="chat-title">AI Assistant</div>
          <div className="chat-line"></div>
          <div className="chat-line short"></div>
        </div>
      </div>

      <div className="dashboard-actions">
        <div className="action-card">
          <span>⚡</span>
          <p>Automation</p>
        </div>

        <div className="action-card">
          <span>💬</span>
          <p>Chatbot</p>
        </div>

        <div className="action-card">
          <span>📊</span>
          <p>Analytics</p>
        </div>
      </div>

      <div className="dashboard-footer">
        <span>🟢 AI Active</span>
      </div>

    </div>
  );
}