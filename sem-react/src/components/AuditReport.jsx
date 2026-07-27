import OverallScore from "./OverallScore";
import AuditMetrics from "./AuditMetrics";
import RecommendationList from "./RecommendationList";
import AuditCTA from "./AuditCTA";
import generateAudit from "../utils/generateAudit";

export default function AuditReport({ auditInfo }) {

  if (!auditInfo) return null;

  const auditData = generateAudit(auditInfo.website);

  return (
    <div className="audit-report">

      <OverallScore auditData={auditData} />

      <AuditMetrics auditData={auditData} />

      <RecommendationList auditData={auditData} />

      <AuditCTA />

    </div>
  );
}