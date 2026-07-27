import { useState } from "react";
import AuditHero from "../components/AuditHero";
import AuditForm from "../components/AuditForm";
import AuditLoading from "../components/AuditLoading";
import AuditReport from "../components/AuditReport";
import "../style/WebsiteAudit.css";

export default function WebsiteAudit() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(false);
const [auditData, setAuditData] = useState(null);

const handleAudit = (data) => {
  setAuditData(data);

  setLoading(true);
  setReport(false);

  setTimeout(() => {
    setLoading(false);
    setReport(true);
  }, 4500);
};  

  return (
    <main className="website-audit-page">
      <AuditHero />

      {!loading && !report && (
        <AuditForm onAnalyze={handleAudit} />
      )}

      {loading && <AuditLoading />}

      {report && (
        <AuditReport auditInfo={auditData} />
      )}
      
    </main>
  );
}