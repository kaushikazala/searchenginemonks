export default function generateAudit(url) {
  const seed = [...url].reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );

  const random = (min, max, offset) => {
    return min + ((seed * offset) % (max - min + 1));
  };

  const seo = random(78, 99, 3);
  const performance = random(70, 98, 5);
  const accessibility = random(80, 98, 7);
  const bestPractices = random(82, 99, 9);
  const security = random(90, 100, 11);
  const mobile = random(75, 99, 13);

  const overall = Math.round(
    (
      seo +
      performance +
      accessibility +
      bestPractices +
      security +
      mobile
    ) / 6
  );

  const recommendations = [];

  if (performance < 85) {
    recommendations.push({
      priority: "High",
      category: "Performance",
      title: "Optimize Images",
      description:
        "Compress large images and serve next-generation formats like WebP.",
    });

    recommendations.push({
      priority: "High",
      category: "Performance",
      title: "Reduce JavaScript",
      description:
        "Remove unused JavaScript and defer non-critical scripts.",
    });
  }

  if (seo < 90) {
    recommendations.push({
      priority: "Medium",
      category: "SEO",
      title: "Improve Meta Tags",
      description:
        "Add unique title tags and meta descriptions to improve search visibility.",
    });

    recommendations.push({
      priority: "Medium",
      category: "SEO",
      title: "Add Structured Data",
      description:
        "Implement schema markup to help search engines better understand your content.",
    });
  }

  if (accessibility < 90) {
    recommendations.push({
      priority: "Medium",
      category: "Accessibility",
      title: "Improve Accessibility",
      description:
        "Improve keyboard navigation, color contrast, and image alt text.",
    });
  }

  if (mobile < 90) {
    recommendations.push({
      priority: "Medium",
      category: "Mobile",
      title: "Enhance Mobile Experience",
      description:
        "Improve responsive layouts and increase touch target sizes.",
    });
  }

  if (security < 95) {
    recommendations.push({
      priority: "Low",
      category: "Security",
      title: "Strengthen Security",
      description:
        "Review security headers and keep dependencies updated.",
    });
  }

  if (bestPractices < 90) {
    recommendations.push({
      priority: "Low",
      category: "Best Practices",
      title: "Follow Modern Best Practices",
      description:
        "Reduce console errors and remove deprecated APIs.",
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      priority: "Info",
      category: "General",
      title: "Excellent Website Health",
      description:
        "Your website is in great shape. Continue monitoring performance and keep your content updated.",
    });
  }

  return {
    website: url,

    overall,

    scores: [
      {
        title: "SEO",
        score: seo,
        status: seo >= 90 ? "Excellent" : seo >= 80 ? "Good" : "Needs Improvement",
      },
      {
        title: "Performance",
        score: performance,
        status:
          performance >= 90
            ? "Excellent"
            : performance >= 80
            ? "Good"
            : "Needs Improvement",
      },
      {
        title: "Accessibility",
        score: accessibility,
        status:
          accessibility >= 90
            ? "Excellent"
            : accessibility >= 80
            ? "Good"
            : "Needs Improvement",
      },
      {
        title: "Best Practices",
        score: bestPractices,
        status:
          bestPractices >= 90
            ? "Excellent"
            : bestPractices >= 80
            ? "Good"
            : "Needs Improvement",
      },
      {
        title: "Security",
        score: security,
        status: security >= 95 ? "Excellent" : "Good",
      },
      {
        title: "Mobile",
        score: mobile,
        status:
          mobile >= 90
            ? "Excellent"
            : mobile >= 80
            ? "Good"
            : "Needs Improvement",
      },
    ],

    recommendations,
  };
}