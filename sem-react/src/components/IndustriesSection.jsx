import "../style/IndustriesSection.css";
import Reveal from "./Reveal";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Hotel,
  Laptop,
  Plane,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Patient-focused digital solutions, healthcare platforms, and appointment systems.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Modern learning platforms, educational websites, and student portals.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Property listing platforms, agency websites, and lead generation systems.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Scalable online stores with secure checkout and optimized shopping experiences.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Professional financial websites with secure, user-friendly digital experiences.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Hotel, restaurant, and travel solutions focused on customer engagement.",
  },
  {
    icon: Laptop,
    title: "Technology",
    description:
      "SaaS platforms, startup websites, and innovative digital products.",
  },
  {
    icon: Plane,
    title: "Travel",
    description:
      "Booking platforms and travel experiences designed for modern explorers.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section">

      <div className="container">

        <Reveal>
          <div className="industries-header">

            <span className="industries-tag">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Solutions Built For
              <span> Every Industry</span>
            </h2>

            <p>
              Every business is different. Our experience across multiple
              industries helps us create digital solutions tailored to unique
              challenges and business goals.
            </p>

          </div>
        </Reveal>

        <div className="industries-grid">

          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Reveal key={index}>
                <div className="industry-card">

                  <div className="industry-icon">
                    <Icon size={34} />
                  </div>

                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>

    </section>
  );
}