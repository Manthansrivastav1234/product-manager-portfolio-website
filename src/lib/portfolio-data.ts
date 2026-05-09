export type CaseStudy = {
  title: string;
  metrics: { metric: string; label: string }[];
  problem: string;
  approach: string;
  impact: string[];
};

export type CompanyImpact = {
  company: string;
  duration: string;
  stories: CaseStudy[];
};

export const impactStoryGroups: CompanyImpact[] = [
  {
    company: "KUKU (formerly Kuku FM)",
    duration: "Nov 2025 - Present",
    stories: [
      {
        title: "Monetization & Revenue Optimization",
        metrics: [
          { metric: "74%", label: "Revenue Growth in 4 Months" },
          { metric: "0.4 -> 0.7", label: "eCPM Improvement" },
          { metric: "Multi-platform", label: "Monetization Optimization" }
        ],
        problem:
          "The platform's ad monetization ecosystem lacked scalable optimization across placements, bidding infrastructure, and conversion journeys, limiting revenue growth and monetization efficiency.",
        approach:
          "Worked across end-to-end monetization initiatives by optimizing ad placements, experimenting with paywall strategies, and running A/B tests to improve monetization performance. Transitioned ad infrastructure from pure bidding to a hybrid mediation setup while also contributing to growth strategies for ad-supported funnels using Meta Ads, lifecycle campaigns, and targeted engagement initiatives.",
        impact: [
          "Drove 74% revenue growth within 4 months.",
          "Increased eCPM from 0.4 to 0.7.",
          "Improved monetization scalability across platforms.",
          "Strengthened growth performance for ad-supported user funnels."
        ]
      },
      {
        title: "Product Systems & Platform Ownership",
        metrics: [
          { metric: "1", label: "Unified Pre-IPO Brand Platform" },
          { metric: "Custom", label: "Notification & Cohorting System" },
          { metric: "Self-Serve", label: "CMS Workflows" },
          { metric: "Ownership", label: "Product and Platform Ownership" }
        ],
        problem:
          "The organization required stronger internal product systems, centralized information accessibility, scalable engagement infrastructure, and reduced dependency on engineering teams for operational workflows.",
        approach:
          "Created PRDs, contributed to roadmap planning, and worked on data-driven product decision-making using Superset dashboards and monetization experiments. Also worked on a centralized pre-IPO brand website serving as a single source of truth for investors, employees, and end users. Built a customized notification and user cohorting platform supporting Push, WhatsApp, and In-App engagement with behavioral segmentation and lifecycle targeting capabilities. Enhanced internal CMS workflows with self-serve operational features.",
        impact: [
          "Improved product execution and operational scalability.",
          "Enabled personalized multi-channel lifecycle engagement.",
          "Reduced operational dependency on engineering teams.",
          "Improved accessibility and centralization of internal product systems."
        ]
      },
      {
        title: "User Engagement & Retention",
        metrics: [
          { metric: "34.82%", label: "15th Episode Completion" },
          { metric: "3%", label: "Premium Conversion Rate" },
          { metric: "3-stage", label: "Lifecycle Engagement Journeys" },
          { metric: "Personalized", label: "Dynamic Pricing" }
        ],
        problem:
          "The platform needed stronger lifecycle engagement systems and personalized communication workflows to improve user retention, engagement quality, and premium conversion rates.",
        approach:
          "Designed lifecycle engagement journeys across WhatsApp, Push Notifications, and In-App channels for pre-trial, trial, and post-trial users. Built personalized WhatsApp flows using ZixFlow with behavioral targeting, recommendation systems, and dynamic pricing plans.",
        impact: [
          "Achieved 34.82% 15th-episode completion conversion.",
          "Achieved 3% premium conversion rate.",
          "Improved personalized engagement and retention.",
          "Enabled scalable lifecycle targeting and behavioral communication workflows."
        ]
      }
    ]
  },
  {
    company: "Tata Play",
    duration: "July 2023 - Oct 2025",
    stories: [
      {
        title: "International OTT Product Delivery",
        metrics: [
          { metric: "2", label: "International OTT Markets" },
          { metric: "Cross-platform", label: "Product Rollouts" },
          { metric: "Multi-device", label: "OTT Delivery" },
          { metric: "KPI-focused", label: "Feature Execution" }
        ],
        problem:
          "International OTT partners required scalable white-label OTT products with coordinated feature rollouts, stakeholder alignment, and improved execution quality across platforms.",
        approach:
          "Led delivery of cross-platform OTT white-label products for international markets including Cignal Philippines and Akash Bangladesh. Conducted user research, competitor analysis, and stakeholder coordination to drive KPI-focused product execution and rollout planning.",
        impact: [
          "Successfully delivered OTT products across international markets.",
          "Improved cross-functional execution and rollout coordination.",
          "Enabled scalable multi-platform OTT experiences.",
          "Strengthened KPI-focused product delivery processes."
        ]
      },
      {
        title: "Personalization & Retention Optimization",
        metrics: [
          { metric: "~35%", label: "Engagement Improvement" },
          { metric: "43% -> 67%", label: "Retention Improvement" },
          { metric: "ML-driven", label: "Personalization Systems" },
          { metric: "Enhanced", label: "User Stickiness" }
        ],
        problem:
          "The platform required stronger personalization and retention systems to improve engagement quality and reduce user drop-offs.",
        approach:
          "Worked on ML-driven personalization and retention systems focused on improving content relevance, recommendation quality, and user engagement behavior across OTT experiences.",
        impact: [
          "Improved engagement by ~35%.",
          "Increased retention from 43% to 67%.",
          "Enhanced content discoverability and personalization.",
          "Improved overall platform stickiness and retention performance."
        ]
      },
      {
        title: "SEO & Discoverability Optimization",
        metrics: [
          { metric: "SSR-led", label: "SEO Improvements" },
          { metric: "Enhanced", label: "Content Discoverability" },
          { metric: "Page 14 -> 1", label: "Organic Visibility" }
        ],
        problem:
          "Content discoverability and SEO performance required optimization to improve organic visibility and user acquisition efficiency.",
        approach:
          "Led SEO optimization initiatives through SSR improvements and discoverability enhancements across OTT content experiences.",
        impact: [
          "Improved SEO performance and discoverability.",
          "Enhanced content visibility across platforms.",
          "Improved organic reach and user acquisition efficiency."
        ]
      }
    ]
  }
];

export const productPhilosophy = [
  {
    title: "Data-backed Decisions",
    text: "Prioritize experimentation, cohort insights, and measurable outcomes over assumptions."
  },
  {
    title: "User-first Growth",
    text: "Design retention and monetization systems that improve value delivery, not just vanity metrics."
  },
  {
    title: "Fast Execution with Engineering",
    text: "Convert strategy into shippable product increments through close product-engineering collaboration."
  },
  {
    title: "AI-first Product Thinking",
    text: "Use AI workflows and automation to accelerate product loops and decision velocity."
  }
];

export const selectedProductWork = [
  {
    title: "Monetization Systems",
    text: "Owned ad monetization and funnel optimization with experimentation frameworks, mediation transitions, and pricing-aware user pathways."
  },
  {
    title: "Lifecycle Engagement",
    text: "Built lifecycle journeys across push, WhatsApp, and in-app channels with behavioral cohorting, personalization, and conversion intent modeling."
  },
  {
    title: "OTT Platform Growth",
    text: "Delivered scalable white-label OTT rollouts across international markets with stronger discovery, personalization, and retention outcomes."
  }
];

export const skills = {
  Product: ["Product Strategy", "Roadmapping", "Monetization", "Growth", "Lifecycle Engagement", "A/B Testing"],
  Analytics: ["Mixpanel", "Superset", "SQL", "Google Analytics"],
  Technical: ["AWS", "Python", "Machine Learning", "APIs"],
  Tools: ["Jira", "Figma", "MoEngage", "AdMob", "Meta Ads", "ZixFlow", "Gupshup"],
  AI: ["Cursor", "n8n", "CrewAI", "ChatGPT"]
};

export type CertificationItem = {
  title: string;
  issuer: string;
  fileUrl: string;
  previewImage?: string;
  previewFit?: "cover" | "contain";
  verifyUrl?: string;
  issueDate?: string;
  expiryDate?: string;
};

export const certifications: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    fileUrl: "/certificates/aws-cloud-practitioner.png",
    previewImage: "/certificates/aws-cloud-practitioner.png",
    previewFit: "cover",
    verifyUrl: "https://aws.amazon.com/verification",
    issueDate: "May 2, 2025",
    expiryDate: "May 2, 2028"
  },
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    fileUrl: "/certificates/scrumalliance-csm-certificate.pdf",
    previewImage: "/certificates/scrumalliance-csm-preview.png",
    previewFit: "contain",
    issueDate: "May 4, 2025",
    expiryDate: "May 4, 2027"
  }
];

export const contact = {
  email: "manthan1234sri@gmail.com",
  phone: "+91 7042618954",
  linkedin: "https://linkedin.com/in/manthan-srivastav-dtu/"
};
