import seoImage from "../assests/SEO.jpeg";
import webDesignImage from "../assests/WEB.jpeg";
import brandingImage from "../assests/BRAND.jpeg";
import aiImage from "../assests/AI.jpeg";
import marketingImage from "../assests/DM.jpeg";

export const servicesData = [ 
  {
    id: "seo",
    badge: "Search visibility",
    title: "SEO that turns discovery into qualified demand",
    description:
      "We build technical foundations, create intent-led content, and strengthen authority so your business shows up for the searches that already matter.",
    illustration: seoImage,
    features: [
      "Technical SEO and site health audits",
      "Keyword mapping aligned to revenue goals",
      "Content and link strategies that compound",
    ],
    button: "Book SEO strategy",
      stats: [
        { value: "+180%", label: "Organic lift" },
        { value: "3.8x", label: "Qualified traffic" },
        { value: "92%", label: "Retained clients" },
      ],
    reverse: false,
  },

  {
    id: "web-design",
    badge: "Digital experience",
    title: "Web design that feels as premium as your offer",
    description:
      "Every layout is crafted to guide attention, build confidence, and convert visitors into conversations with a refined premium feel.",
    illustration: webDesignImage,
    features: [
      "Responsive UX and conversion-first storytelling",
      "Custom interfaces designed for trust and clarity",
      "Fast, accessible builds with polished motion",
    ],
    button: "See web design approach",
    stats: [
      { value: "1.8x", label: "Engagement boost" },
      { value: "42%", label: "Higher conversions" },
      { value: "2.4s", label: "Average load time" },
    ],
    reverse: true,
  },

  {
    id: "branding",
    badge: "Identity systems",
    title: "Branding that gives your business a signature presence",
    description:
      "From logos to typography and messaging, we shape visual systems that feel confident, cohesive, and unmistakably yours.",
    illustration: brandingImage,
    features: [
      "Logo, palette, and brand direction",
      "Collateral and digital identity kits",
      "Messaging that sharpens positioning",
    ],
    button: "Explore branding",
    stats: [
      { value: "4.9/5", label: "Brand clarity score" },
      { value: "3x", label: "More recognisable" },
      { value: "100%", label: "Custom direction" },
    ],
    reverse: false,
  },

  {
    id: "ai",
    badge: "Automation",
    title: "AI systems that make growth feel effortless",
    description:
      "We blend practical automation, smart workflows, and intuitive AI layers so your team can move faster without sacrificing quality.",
    illustration: aiImage,
    features: [
      "Automation flows for lead handling",
      "AI copilots and content operations",
      "Customer experience enhancements",
    ],
    button: "See AI opportunities",
    stats: [
      { value: "6 hrs", label: "Saved weekly" },
      { value: "27%", label: "Faster response time" },
      { value: "24/7", label: "Workflow support" },
    ],
    reverse: true,
  },

  {
    id: "marketing",
    badge: "Performance growth",
    title: "Growth marketing built for revenue, not just reach",
    description:
      "We connect paid media, lifecycle messaging, and analytics into a focused engine that expands pipeline and keeps performance accountable.",
    illustration: marketingImage,
    features: [
      "Google Ads and Meta strategy",
      "Creative testing and landing page alignment",
      "Reporting that highlights what matters",
    ],
    button: "Plan growth campaign",
    stats: [
      { value: "38%", label: "Higher ROAS" },
      { value: "5.2x", label: "Lead quality" },
      { value: "12k+", label: "Monthly clicks" },
    ],
    reverse: false,
  },
];

export const serviceNavigation = servicesData.map((service) => ({
  id: service.id,
  label: service.badge,
}));