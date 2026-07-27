import "../style/AuditMetrics.css";
import { ArrowUpRight } from "lucide-react";

export default function AuditMetrics({ auditData }) {
  if (!auditData) return null;
  return (
    <section className="audit-metrics">
      <div className="container">

        <div className="audit-metrics-header">
          <span className="audit-label">
            Website Analysis
          </span>

          <h2>
            Performance Breakdown
          </h2>

          <p>
            Each category has been evaluated to identify opportunities for
            improving your website's overall health and user experience.
          </p>
        </div>

        <div className="audit-metrics-list">

          {auditData.scores.map((item) => (

            <div
              className="audit-metric"
              key={item.title}
            >

              <div className="audit-metric-left">

                <h3>{item.title}</h3>

                <span>{item.status}</span>

              </div>

              <div className="audit-metric-right">

                <strong>{item.score}</strong>

                <ArrowUpRight size={18} />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}