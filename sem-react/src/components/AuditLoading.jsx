import { useEffect, useState } from "react";
import "../style/AuditLoading.css";
import { CheckCircle2, LoaderCircle, Globe } from "lucide-react";

const steps = [
  "Connecting to website...",
  "Checking SEO structure...",
  "Analyzing performance...",
  "Reviewing accessibility...",
  "Inspecting security...",
  "Generating report...",
];

export default function AuditLoading() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }

        clearInterval(interval);
        return prev;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <section className="audit-loading">
      <div className="container">
        <div className="audit-loading-wrapper">
          <div className="loading-spinner">
            <Globe size={46} />
          </div>

          <span className="audit-badge">Website Analysis</span>

          <h2>Analyzing Your Website</h2>

          <p>
            Please wait while we scan your website and prepare a detailed
            performance, SEO, accessibility, and security report.
          </p>

          <div className="loading-progress">
            <span style={{ width: `${progress}%` }} />
          </div>

          <div className="loading-steps">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`loading-step ${
                  index <= activeStep ? "completed" : ""
                }`}
              >
                {index < activeStep ? (
                  <CheckCircle2 size={18} />
                ) : index === activeStep ? (
                  <LoaderCircle size={18} className="loading-icon" />
                ) : (
                  <div className="loading-dot" />
                )}

                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}