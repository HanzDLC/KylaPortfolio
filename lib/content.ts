/* ------------------------------------------------------------------ */
/*  ALL EDITABLE CONTENT LIVES HERE.                                  */
/*  Update text, links, projects, CV entries below — components read  */
/*  from this single source of truth.                                 */
/* ------------------------------------------------------------------ */

export const site = {
  firstName: "Kyla",
  fullName: "Kyla Marie M. Casimero",
  role: "Undergraduate Researcher | Biologist",
  location: "Iloilo City, Philippines",
  email: "casimerokylamarie@gmail.com",
  facebook: "https://www.facebook.com/kylamariemcasimero",
  // Export the Canva CV as PDF and drop it in /public with this exact name
  // to make the "Download CV" buttons work.
  cvFile: "/Kyla-Marie-Casimero-CV.pdf",
  // Drop a portrait in /public (e.g. /kyla.jpg) and set the path here to
  // replace the illustrated hero card with a real photo.
  heroPhoto: "",
  tagline:
    "Analytical biotechnology researcher turning molecular and microbiological science into real-world sustainability and bioremediation solutions.",
  metaDescription:
    "Portfolio of Kyla Marie M. Casimero — Biology undergraduate researcher at Iloilo Science and Technology University specializing in microbiology, molecular biology, and bioremediation.",
};

export const about = {
  // Short version used on the home page.
  shortBio:
    "I’m a Biology undergraduate at Iloilo Science and Technology University specializing in microbiology and cell & molecular biology. With 500+ hours in the lab, I work across PCR, gel electrophoresis, and bacterial immobilization — turning research into real-world sustainability and bioremediation solutions.",
  // Verbatim from the source CV.
  summary:
    "Analytical Biotechnology Undergraduate Researcher at Iloilo Science and Technology University with over 500 hours of hands-on laboratory experience. Proven expertise across molecular and microbiological workflows, including PCR, gel electrophoresis, growth curve analysis, bacterial immobilization, and enzymatic analysis. Experienced in conducting microbial quality assessments and chemical assays, with advanced proficiency in R, Excel, and SPSS statistical data analysis.",
  mission:
    "Actively committed to leveraging research-driven innovation to advance sustainability techniques and bioremediation.",
  focusAreas: [
    "Microbiology",
    "Molecular Biology & Genetics",
    "Bioremediation",
    "Food Safety",
    "Biotechnology",
    "Sustainability",
  ],
  stats: [
    { value: "500+", label: "Hours of lab experience" },
    { value: "4", label: "Research projects & presentations" },
    { value: "3", label: "Major awards earned in 2026" },
    { value: "’22→", label: "Dean’s Lister since 2022" },
  ],
};

export type Project = {
  title: string;
  // Condensed title + one-line summary used in the home "Selected projects" preview.
  shortTitle: string;
  short: string;
  blurb: string;
  tags: string[];
  filters: string[]; // used by the category filter
  methods: string[];
  icon: "leaf" | "microscope" | "dna" | "flask" | "heart";
  accent: "slate" | "navy" | "sand";
  badge?: string;
  meta?: string;
  // Drop a photo in /public/projects/ and set the path here, e.g.
  // image: "/projects/fog-thesis.jpg" — the card shows it automatically.
  image?: string;
};

export const projects: Project[] = [
  {
    title:
      "Biodegradation of Fats, Oils, and Grease (FOG) by Staphylococcus borealis Immobilized on Milkfish Scales and Sugarcane Bagasse",
    shortTitle: "Biodegradation of FOG by Staphylococcus borealis",
    short:
      "Award-winning undergraduate thesis using bacteria immobilized on fishery and farm waste to break down fats, oils, and grease.",
    blurb:
      "Undergraduate thesis investigating an eco-friendly route to grease bioremediation — immobilizing Staphylococcus borealis on fishery and agricultural waste to create a low-cost, sustainable FOG-degradation platform.",
    tags: ["Bioremediation", "Microbiology", "Sustainability"],
    filters: ["Bioremediation", "Microbiology"],
    methods: ["Bacterial immobilization", "Growth curve analysis", "Enzymatic assays"],
    icon: "leaf",
    accent: "slate",
    badge: "1st Place — Best Thesis Poster",
  },
  {
    title:
      "Comprehensive Analysis of Escherichia coli from Chest Freezers in La Paz Market: Isolation, Phenotypic Characterization, and Molecular Techniques",
    shortTitle: "Escherichia coli in Public-Market Chest Freezers",
    short:
      "Food-safety study isolating and characterizing E. coli from market freezers to assess public-health risk.",
    blurb:
      "A food-safety study isolating and characterizing E. coli contamination from public-market chest freezers through phenotypic profiling and molecular techniques to assess public-health risk.",
    tags: ["Microbiology", "Food Safety", "Molecular Techniques"],
    filters: ["Microbiology"],
    methods: ["Isolation & culturing", "Phenotypic characterization", "PCR & gel electrophoresis"],
    icon: "microscope",
    accent: "navy",
  },
  {
    title:
      "Comparative Analysis of Efficacy of the Different Attractant Compositions and Investigating Phenotypic Consequences in Controlled Cross of Drosophila melanogaster (Fruit Flies) Population",
    shortTitle: "Drosophila melanogaster Attractant & Phenotype Study",
    short:
      "Compared attractant compositions and phenotypic outcomes across controlled fruit-fly crosses.",
    blurb:
      "Compared the efficacy of different attractant compositions and tracked phenotypic outcomes across controlled crosses of fruit-fly populations to study inheritance and behavior.",
    tags: ["Genetics", "Experimental Design"],
    filters: ["Molecular & Genetics"],
    methods: ["Controlled genetic crosses", "Phenotype scoring", "Statistical analysis (R / SPSS)"],
    icon: "dna",
    accent: "slate",
    meta: "Special Problem · Presented December 4, 2024",
  },
  {
    title:
      "Characterization of the Genotype-Phenotype Correlation, Inheritance Pattern, Therapeutic Response, and Management Strategies in Beta-Thalassemia Major: A Case Study of a Pediatric Patient from Oton, Iloilo, Philippines",
    shortTitle: "Beta-Thalassemia Major — Pediatric Case Study",
    short:
      "Mapped genotype–phenotype correlation, inheritance, and management in a pediatric Beta-Thalassemia case.",
    blurb:
      "A pediatric case study from Oton, Iloilo mapping genotype–phenotype correlation, inheritance pattern, therapeutic response, and management strategies in Beta-Thalassemia Major.",
    tags: ["Molecular Biology", "Clinical Case Study", "Genetics"],
    filters: ["Molecular & Genetics"],
    methods: ["Genotype–phenotype analysis", "Clinical data synthesis", "Literature review"],
    icon: "heart",
    accent: "navy",
  },
];

export const projectFilters = [
  "All",
  "Microbiology",
  "Molecular & Genetics",
  "Bioremediation",
] as const;

/* ----------------------------- CV -------------------------------- */

export const education = [
  {
    degree: "Bachelor of Science in Biology",
    school: "Iloilo Science and Technology University",
    detail: "Specializations: Microbiology · Cell and Molecular Biology",
    period: "2022 – Present",
  },
];

// Verbatim from the source CV — "experience & Organizational involvements".
export const experience = [
  {
    role: "Microbiology Intern",
    org: "Institute of Fish Processing Technology – CFOS – UP Visayas",
    points: [
      "Conducted microbiological analysis on fermented fish products, handling everything from sample preparation to microbial quality assessments and enzyme capability of bacteria.",
      "Executed chemical assays to evaluate core biochemical properties, allowing us to verify product integrity and closely track how quality changed over time.",
      "Optimized fish-to-food processing techniques and handling procedures within a production-based laboratory setting, minimizing cross-contamination risks.",
      "Documented daily laboratory workflows and scientific findings, ensuring full traceability and compliance with standard operating procedures (SOPs).",
    ],
  },
  {
    role: "Undergraduate Biotechnology Researcher",
    org: "Iloilo Science and Technology University",
    points: [
      "Designed and executed protocols for bacterial immobilization and growth curve analysis, wastewater bioremediation studies, expanding laboratory capabilities in microbial biotechnology.",
      "Utilized PCR and gel electrophoresis to perform molecular genetics tracking, achieving accurate DNA/RNA replication and analysis.",
      "Engineered data workflows in R, Excel, and SPSS successfully transforming complex raw biological datasets into clear, publication-ready figures, tables, and manuscript sections.",
      "Integrated sustainability techniques into experimental designs, successfully modeling eco-friendly approaches to bioremediation challenges.",
      "Authored and formatted comprehensive scientific papers detailing experimental methodologies, data interpretations, and microbial research findings in alignment with academic publishing standards.",
    ],
  },
];

// Verbatim from the source CV — "key skills".
export const skills = [
  {
    group: "Molecular Biology & Genetics",
    items: ["Polymerase Chain Reaction (PCR)", "Gel Electrophoresis", "DNA/RNA Analysis"],
  },
  {
    group: "Microbiology & Food Safety",
    items: [
      "Microbial Quality Assessment",
      "Bacterial Immobilization",
      "Growth Curve Analysis",
      "Aseptic Technique",
      "Sample Preparation",
    ],
  },
  {
    group: "Scientific Communication",
    items: [
      "Scientific Paper Writing",
      "Technical Documentation",
      "Manuscript Formatting",
      "Project Management",
      "Public Speaking",
    ],
  },
  {
    group: "Digital Tools & Platforms",
    items: [
      "Microsoft Office Suite",
      "Google Workspace Applications",
      "MEGA (Molecular Evolutionary Genetics Analysis)",
    ],
  },
  {
    group: "Professional Strengths",
    items: [
      "Project Management",
      "Organizational Leadership",
      "Critical Thinking",
      "Complex Problem Solving",
      "Collaborative Teamwork",
      "Conflict Resolution",
    ],
  },
];

export const awards = [
  {
    title: "1st Place, Best in Thesis Poster Presentation",
    org: "Iloilo Science and Technology University (ISAT U)",
    year: "2026",
  },
  {
    title: "Best Intern Award",
    org: "ISAT U / University of the Philippines Visayas (UPV)",
    year: "2026",
  },
  {
    title: "Service Award",
    org: "Iloilo Science and Technology University (ISAT U)",
    year: "2026",
  },
  {
    title: "Dean’s Lister",
    org: "Iloilo Science and Technology University (ISAT U)",
    year: "2022 – Present",
  },
];

// Verbatim from the source CV — "RESEARCH AND PRESENTATIONS".
export const research = {
  presentations: [
    "Biodegradation of Fats, Oils, and Grease (FOG) by Staphylococcus borealis Immobilized on Milkfish Scales and Sugarcane Bagasse",
    "Comprehensive Analysis of Escherichia coli from Chest Freezers in La Paz Market: Isolation, Phenotypic Characterization, and Molecular Techniques",
  ],
  specialProblem: {
    label: "Special Problem Presentation (Cell and Molecular Biology Laboratory)",
    meta: "Presented: December 4, 2024",
    items: [
      "Comparative Analysis of Efficacy of the Different Attractant Compositions and Investigating Phenotypic Consequences in Controlled Cross of Drosophila melanogaster (Fruit Flies) Population",
      "Characterization of the Genotype-Phenotype Correlation, Inheritance Pattern, Therapeutic Response, and Management Strategies in Beta-Thalassemia Major: A Case Study of a Pediatric Patient from Oton, Iloilo, Philippines",
    ],
  },
};

// Verbatim from the source CV — "Leadership & Certifications".
export const activities = [
  "31st PSM Visayas Annual Regional Convention and Scientific Meeting | “Sustainability Through Microbial Innovations” | Silliman University, Dumaguete City | 2024",
  "9th National Fisheries Biotech Symposium | “Fisheries Biotech: Supporting Sustainable Industry” | Diamond Jubilee Hall, Iloilo City | 2024",
  "National Science, Technology, and Innovation Week | “Unveiling Tomorrow for Igniting Curiosity” | Iloilo Convention Center | 2023",
  "Participant, Successional Development of Micro-and-Macro-Fouling Communities on Fish Farm Net Enclosure | ISAT U | 2023",
  "Participant, Purification and Characterization of Antioxidant and Antiproliferative Endogenous Peptides from Red Seaweeds | ISAT U | 2025",
  "Participant, HIV Biology and Public Health Status | ISAT U | 2025",
  "Student Seminar on Climate Action and Sustainability | “Forging the Youth Towards a Resilient Future” | ISAT U, Iloilo City | 2023",
];
