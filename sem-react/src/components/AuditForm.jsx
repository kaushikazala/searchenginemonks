import { useState } from "react";
import { Search } from "lucide-react";
import "../style/AuditForm.css";

export default function AuditForm({ onAnalyze }) {
  const [website, setWebsite] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!website.trim()) return;

    onAnalyze({
      website,
      businessName,
      industry,
    });
  };

  return (
    <section className="audit-form-section">
      <div className="container">
        <form className="audit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="website">
              Website URL
            </label>

            <input
              id="website"
              type="url"
              placeholder="https://yourwebsite.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessName">
              Business Name
            </label>

            <input
              id="businessName"
              type="text"
              placeholder="Enter your business name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="industry">
              Industry
            </label>

            <select
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">Select Industry</option>
              <option value="Agency">Agency</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Finance">Finance</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Technology">Technology</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Travel">Travel</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit">
            <Search size={18} />
            Analyze Website
          </button>
        </form>
      </div>
    </section>
  );
}