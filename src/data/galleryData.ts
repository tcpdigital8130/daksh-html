export interface GalleryItem {
  id: string;
  filename: string;
  imageSrc: string;
  title: string;
  category: "dignitaries" | "live-scanning" | "partnerships" | "team";
  categoryLabel: string;
  date: string;
  location: string;
  caption: string;
  highlights: string[];
  aspectRatio: "wide" | "portrait" | "square";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // {
  //   id: "smriti-irani-stage",
  //   filename: "D1.png",
  //   imageSrc: "/gallery/D1.png",
  //   title: "Keynote with Smt. Smriti Irani",
  //   category: "dignitaries",
  //   categoryLabel: "National Dignitaries",
  //   date: "National Leadership Summit",
  //   location: "New Delhi",
  //   caption:
  //     "National General Secretary, Bharatiya Janata Party Smt. Smriti Irani addressing the national gathering alongside DAKSH and SPARK Collective leadership, supported by the Centre for Women Leadership.",
  //   highlights: ["Smt. Smriti Irani Keynote", "Centre for Women Leadership"],
  //   aspectRatio: "wide",
  // },
  {
    id: "live-ridge-scan-counter",
    filename: "D2.png",
    imageSrc: "/gallery/D2.png",
    title: "Real-Time Biometric Ridge Scanning in Action",
    category: "live-scanning",
    categoryLabel: "Live Ridge Scanning",
    date: "Rise & Roar Expo",
    location: "Main Convention Atrium",
    caption:
      "Trained DAKSH assessors use a guided mobile-based process to capture fingerprint images as part of the “Shakti Ki Disha” national drive.",
    highlights: [
      // "Mobile Torch Macro Scan",
      // "Instant Ridge Extraction",
      // "Zero Ink Biometrics",
    ],
    aspectRatio: "portrait",
  },
  {
    id: "british-council-mou",
    filename: "D3.jpeg",
    imageSrc: "/gallery/D3.jpeg",
    title: "British Council & SPARK Collective MOU Signing",
    category: "partnerships",
    categoryLabel: "Global Partnerships",
    date: "International Cultural Centre",
    location: "British Council Division, New Delhi",
    caption:
      "Official signing of the Memorandum of Understanding (MOU) between British Council leadership and The SPARK Collective, with DAKSH present as a SPARK partner supporting the broader youth and women potential mapping initiative.",
    highlights: [
      "British Council MOU",
      "The SPARK Collective",
      "DAKSH — SPARK Partner",
      "Women’s Leadership Initiative",
    ],
    aspectRatio: "wide",
  },
  {
    id: "vip-team-photo-smriti-irani",
    filename: "D4.jpeg",
    imageSrc: "/gallery/D4.jpeg",
    title: "Smt. Smriti Irani & DAKSH Crew",
    category: "dignitaries",
    categoryLabel: "National Dignitaries",
    date: "Post-Summit Briefing",
    location: "Executive Lawns, New Delhi",
    caption:
      'Smt. Smriti Irani with the core DAKSH field engineers and psychometricians wearing official black branded DAKSH "Trust Your Touch" crew uniforms.',
    highlights: [
      "Ministerial Commendation",
      "DAKSH Engineering Crew",
      "Field Verification",
    ],
    aspectRatio: "portrait",
  },
  {
    id: "live-mobile-booth-station",
    filename: "D5.png",
    imageSrc: "/gallery/D5.png",
    title: "On-Site Diagnostic Kiosk & Scanner Desk",
    category: "live-scanning",
    categoryLabel: "Live Ridge Scanning",
    date: "National Convention Centre",
    location: "Grand Ballroom Foyer",
    caption:
      'Attendees line up at the DAKSH "Trust Your Touch" registration station where technical assessors capture ridge patterns and generate real-time cognitive balance reports.',
    highlights: [
      'DAKSH "Trust Your Touch"',
      "High-Throughput Kiosk",
      "Instant Digital Reports",
    ],
    aspectRatio: "wide",
  },
  {
    id: "daksh-standee-shakti-ki-disha",
    filename: "D6.jpeg",
    imageSrc: "/gallery/D6.jpeg",
    title: "DAKSH x SPARK COLLECTIVE — RISE & ROAR",
    category: "partnerships",
    categoryLabel: "National Initiatives",
    date: "National Launch",
    location: "Convention Showcase",
    caption: "Together, we rise. Together, we roar.",
    highlights: [
      "Rainbow Fingerprint Logo",
      "Alliance for Global Good",
      "App QR Integration",
    ],
    aspectRatio: "portrait",
  },
  {
    id: "spark-collective-hall",
    filename: "D7.png",
    imageSrc: "/gallery/D7.png",
    title: "The SPARK Collective Grand Assembly",
    category: "partnerships",
    categoryLabel: "Community Impact",
    date: "Annual Convention",
    location: "Grand Ballroom",
    caption:
      "Hundreds of women leaders, educators, and community mentors gathered under the SPARK Collective banner for potential diagnostics and leadership alignment.",
    highlights: [
      "500+ Community Leaders",
      "Empowerment Ecosystem",
      "Pan-India Reach",
    ],
    aspectRatio: "wide",
  },
  {
    id: "daksh-operations-crew",
    filename: "D8.jpeg",
    imageSrc: "/gallery/D8.jpeg",
    title: "The DAKSH Crew — One Team. One Identity. One Purpose.",
    category: "team",
    categoryLabel: "DAKSH Field Team",
    date: "Operational Deployment",
    location: "Spark Collective Camp",
    caption:
      "A trained team of assessment professionals and field coordinators, united by the DAKSH identity and committed to delivering a seamless assessment experience.",
    highlights: [
      "Certified Psychometricians",
      "Uniformed Field Assessors",
      "Trained Evaluators",
    ],
    aspectRatio: "wide",
  },
  {
    id: "women-network",
    filename: "D9.jpeg",
    imageSrc: "/gallery/D9.jpeg",
    title: "Indian Women Network (IWN) Chapter",
    category: "partnerships",
    categoryLabel: "Institutional Governance",
    date: "Conclave",
    location: "Regional Centre",
    caption:
      "DAKSH leadership and representatives collaborating with the Indian Women Network for corporate potential mapping.",
    highlights: ["Corporate Talent Mapping", "Women In Leadership"],
    aspectRatio: "portrait",
  },
  {
    id: "keynote-podium-spark",
    filename: "D10.jpeg",
    imageSrc: "/gallery/D10.jpeg",
    title: 'Keynote Address at "Rise & Roar"',
    category: "dignitaries",
    categoryLabel: "National Dignitaries",
    date: "Plenary Session",
    location: "Main Auditorium",
    caption:
      "Leadership address highlighting the transformative power of empirical cognitive profiling, overcoming rote expectations, and unlocking innate human talent.",
    highlights: [
      "Plenary Keynote",
      "Rise & Roar Mission",
      "Cognitive Discovery",
    ],
    aspectRatio: "portrait",
  },
  {
    id: "student-assessment-pavilion",
    filename: "D11.jpeg",
    imageSrc: "/gallery/D11.jpeg",
    title: "Student & Youth Diagnostic Tech Pavilion",
    category: "live-scanning",
    categoryLabel: "Live Ridge Scanning",
    date: "STEM Career Expo",
    location: "Tech Exhibition Hall",
    caption:
      "Engineering and high school candidates reviewing their learning profiles directly with DAKSH technical assessors.",
    highlights: [
      "Youth Career Alignment",
      "Real-Time Screen Synthesis",
      "Direct Assessor Q&A",
    ],
    aspectRatio: "wide",
  },
  {
    id: "school-counselor-workshop",
    filename: "D12.jpeg",
    imageSrc: "/gallery/D12.jpeg",
    title: "Educator & School Counselor Masterclass",
    category: "team",
    categoryLabel: "DAKSH Field Team",
    date: "Academic Training Cohort",
    location: "Model Senior Secondary School",
    caption:
      "Empowering school principals and academic counselors with Dermatoglyphics Multiple Intelligence Test diagnostic frameworks to replace rote pressure with scientific empathy.",
    highlights: [
      "Counselor Certification",
      "Empathetic Schooling",
      "Anti-Rote Learning",
    ],
    aspectRatio: "wide",
  },
];
