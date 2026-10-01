import { BenchmarkPersona, AssessmentQuestion } from '../types';

export const BENCHMARK_PERSONAS: BenchmarkPersona[] = [
  {
    id: 'aarav-class8',
    name: 'Aarav',
    category: 'Student',
    ageGroup: 'Class 8 (13–14 yrs)',
    headline: 'High Kinesthetic & Spatial Dexterity with Balanced Dominance',
    summary: 'Demonstrates strong bodily-kinesthetic coordination (85%) and linguistic acumen (80%), with a balanced hemispheric profile (Left 52% | Right 48%). Highly receptive to hands-on visual STEM experiments and interactive simulations.',
    leftBrainPercentage: 52,
    rightBrainPercentage: 48,
    dominantHemisphere: 'Bilateral Equilibrium',
    learningStyle: {
      visual: 42,
      auditory: 23,
      kinesthetic: 35,
      primaryStyle: 'Visual',
      recommendation: 'Learns fastest with interactive 3D models, visual flashcards, and experiential lab experiments rather than passive lecture notes.'
    },
    intelligences: [
      { key: 'bodily', label: 'Bodily-Kinesthetic', score: 85, percentile: 89, description: 'Fine motor control, physical coordination, tactile precision.', associatedLobe: 'Motor Cortex & Cerebellum' },
      { key: 'linguistic', label: 'Linguistic', score: 80, percentile: 84, description: 'Verbal structuring, clear storytelling, vocabulary agility.', associatedLobe: 'Left Temporal' },
      { key: 'spatial', label: 'Spatial-Visual', score: 78, percentile: 81, description: '3D structural visualization, mental spatial rotation.', associatedLobe: 'Right Parietal & Occipital' },
      { key: 'logical', label: 'Logical-Math', score: 76, percentile: 79, description: 'Pattern recognition, basic mathematical deduction.', associatedLobe: 'Left Frontal & Parietal' },
      { key: 'interpersonal', label: 'Interpersonal', score: 72, percentile: 75, description: 'Active teamwork, empathy in peer groups.', associatedLobe: 'Frontal & Temporal' },
      { key: 'intrapersonal', label: 'Intrapersonal', score: 70, percentile: 73, description: 'Self-reflection and autonomous study focus.', associatedLobe: 'Prefrontal Cortex' },
      { key: 'naturalistic', label: 'Naturalistic', score: 68, percentile: 71, description: 'Observation of physical environments and wildlife.', associatedLobe: 'Parietal' },
      { key: 'musical', label: 'Musical-Rhythmic', score: 62, percentile: 66, description: 'Sensitivity to cadence, rhythm, and acoustic patterns.', associatedLobe: 'Right Temporal' },
    ],
    quotients: {
      iq: { score: 124, label: 'High Competence', description: 'Quick grasp of spatial concepts and problem-solving puzzles.' },
      eq: { score: 118, label: 'Balanced Empathy', description: 'Harmonious peer relationships and emotional stability in school.' },
      aq: { score: 122, label: 'Resilient Learner', description: 'Positive response to academic challenges and coach feedback.' },
      cq: { score: 128, label: 'Inventive Explorer', description: 'Naturally curious with tangible builder and maker projects.' },
    },
    topCareers: [
      { title: 'Robotics & Mechatronics Systems', field: 'Technology & STEM', matchScore: 95, coreStrength: 'Kinesthetic precision + Spatial design', growthHorizon: 'High Future Demand', roadmapHint: 'Introduce hands-on Arduino/Raspberry Pi robotics and competitive school science fairs.' },
      { title: 'Interactive Media & Game Architecture', field: 'Design & Computing', matchScore: 91, coreStrength: 'Linguistic narrative + Visual balance', growthHorizon: 'Expanding Digital Sector', roadmapHint: 'Encourage creative 3D modeling and Python coding basics.' },
      { title: 'Sports Science & Physical Kinesiology', field: 'Applied Science', matchScore: 88, coreStrength: 'High bodily kinesthetic intelligence', growthHorizon: 'Rapidly Growing Domain', roadmapHint: 'Cultivate athletic training alongside biological sciences.' },
    ],
    developmentRecommendations: [
      'Encourage hands-on physical building projects to channel high kinesthetic intelligence.',
      'Introduce mind-mapping and color-coded study schedules to support visual learning.',
      'Use Vayo AI Counselor to explore Class 9 and 10 stream foundations early.'
    ]
  },
  {
    id: 'ananya-class11',
    name: 'Ananya',
    category: 'Student',
    ageGroup: 'Class 11 (16–17 yrs)',
    headline: 'High Logical Rigor with Deep Reflective Intrapersonal Insight',
    summary: 'Excels in deductive mathematics and complex conceptual modeling. Navigating senior secondary stream prep with disciplined focus.',
    leftBrainPercentage: 58,
    rightBrainPercentage: 42,
    dominantHemisphere: 'Left (Analytical & Logical)',
    learningStyle: {
      visual: 38,
      auditory: 40,
      kinesthetic: 22,
      primaryStyle: 'Auditory',
      recommendation: 'Gains maximum conceptual mastery through structured seminar discussions, comparative study notes, and voice debriefs.'
    },
    intelligences: [
      { key: 'logical', label: 'Logical-Math', score: 94, percentile: 97, description: 'Advanced calculus, deductive proofs, algorithmic decomposition.', associatedLobe: 'Left Frontal & Parietal' },
      { key: 'intrapersonal', label: 'Intrapersonal', score: 91, percentile: 94, description: 'Intense autonomous focus, disciplined exam prep routine.', associatedLobe: 'Prefrontal Cortex' },
      { key: 'linguistic', label: 'Linguistic', score: 86, percentile: 89, description: 'Rigorous technical vocabulary and written analysis.', associatedLobe: 'Left Temporal' },
      { key: 'spatial', label: 'Spatial-Visual', score: 82, percentile: 85, description: 'Abstract geometry and multi-dimensional matrices.', associatedLobe: 'Right Parietal' },
      { key: 'naturalistic', label: 'Naturalistic', score: 74, percentile: 77, description: 'Systemic ecological and physical laws observation.', associatedLobe: 'Parietal' },
      { key: 'interpersonal', label: 'Interpersonal', score: 68, percentile: 71, description: 'Selective deep collaboration with study peers.', associatedLobe: 'Frontal' },
      { key: 'bodily', label: 'Bodily-Kinesthetic', score: 60, percentile: 63, description: 'Sedentary study stamina and controlled fine motor skills.', associatedLobe: 'Motor Cortex' },
      { key: 'musical', label: 'Musical-Rhythmic', score: 58, percentile: 61, description: 'Acoustic focus with instrumental background music.', associatedLobe: 'Right Temporal' },
    ],
    quotients: {
      iq: { score: 135, label: 'Superior Analytical', description: 'Outstanding abstract reasoning and quantitative theorem mastery.' },
      eq: { score: 114, label: 'Composed Focus', description: 'Maintains composure during competitive mock examinations.' },
      aq: { score: 128, label: 'High Resilience', description: 'Recovers quickly from difficult problem sets and rank fluctuations.' },
      cq: { score: 120, label: 'Analytical Creative', description: 'Finds elegant mathematical solutions to non-standard puzzles.' },
    },
    topCareers: [
      { title: 'Computer Science & AI Research', field: 'Technology', matchScore: 97, coreStrength: 'High logical-math + Intrapersonal deep work', growthHorizon: 'Highest Global Demand', roadmapHint: 'Prepare for JEE Advanced and premier algorithmic competitions.' },
      { title: 'Actuarial & Quantitative Finance', field: 'Mathematical Finance', matchScore: 93, coreStrength: 'Stochastic modeling + High IQ', growthHorizon: 'High Strategic Value', roadmapHint: 'Explore probability theory and statistical programming in Python.' },
      { title: 'Theoretical Physics & Systems Research', field: 'Pure Sciences', matchScore: 90, coreStrength: 'Deductive proofs + Spatial matrices', growthHorizon: 'Academic & Industrial R&D', roadmapHint: 'Participate in Olympiads and premier university summer fellowships.' },
    ],
    developmentRecommendations: [
      'Balance high solitary study with group presentation drills to bolster verbal agility.',
      'Incorporate structured stress breaks to prevent pre-examination cognitive fatigue.',
      'Consult with DAKSH certified counselors for university admissions roadmap.'
    ]
  },
  {
    id: 'rahul-father',
    name: 'Rahul',
    category: 'Professional',
    ageGroup: 'Father (42 yrs)',
    headline: 'Executive Leadership with Strategic Interpersonal Mastery',
    summary: 'Seasoned organizational strategist balancing analytical operational execution with cross-functional leadership and high emotional quotient.',
    leftBrainPercentage: 54,
    rightBrainPercentage: 46,
    dominantHemisphere: 'Left (Analytical & Logical)',
    learningStyle: {
      visual: 36,
      auditory: 45,
      kinesthetic: 19,
      primaryStyle: 'Auditory',
      recommendation: 'Synthesizes enterprise information through executive briefings, dialectic stakeholder debates, and audio summaries.'
    },
    intelligences: [
      { key: 'interpersonal', label: 'Interpersonal', score: 94, percentile: 97, description: 'Strategic negotiations, talent mentorship, organizational alignment.', associatedLobe: 'Frontal & Temporal' },
      { key: 'logical', label: 'Logical-Math', score: 88, percentile: 91, description: 'Budgetary models, P&L architecture, unit economics.', associatedLobe: 'Left Frontal' },
      { key: 'linguistic', label: 'Linguistic', score: 87, percentile: 90, description: 'Executive board presentations and investor relations.', associatedLobe: 'Left Temporal' },
      { key: 'intrapersonal', label: 'Intrapersonal', score: 85, percentile: 88, description: 'Disciplined personal values and calm crisis management.', associatedLobe: 'Prefrontal Cortex' },
      { key: 'spatial', label: 'Spatial-Visual', score: 72, percentile: 75, description: 'Product roadmap visualization and org chart architecture.', associatedLobe: 'Right Parietal' },
      { key: 'naturalistic', label: 'Naturalistic', score: 66, percentile: 69, description: 'Macro-economic trend sensing and business climate awareness.', associatedLobe: 'Parietal' },
      { key: 'musical', label: 'Musical-Rhythmic', score: 60, percentile: 63, description: 'Conversational pacing and rhetorical cadences.', associatedLobe: 'Right Temporal' },
      { key: 'bodily', label: 'Bodily-Kinesthetic', score: 58, percentile: 61, description: 'Executive poise, posture, and boardroom presence.', associatedLobe: 'Motor Cortex' },
    ],
    quotients: {
      iq: { score: 128, label: 'Superior Strategic', description: 'Swift operational diagnosis and organizational problem solving.' },
      eq: { score: 136, label: 'Executive Mastery', description: 'Exceptional cross-functional consensus building and emotional composure.' },
      aq: { score: 134, label: 'High Adversity Mastery', description: 'Steers complex business units through market disruption.' },
      cq: { score: 122, label: 'Pragmatic Innovation', description: 'Architects sustainable business processes and scalable operating workflows.' },
    },
    topCareers: [
      { title: 'Chief Executive / Managing Director', field: 'Executive Leadership', matchScore: 96, coreStrength: 'High EQ + Systems logic', growthHorizon: 'High Impact', roadmapHint: 'Leverage data-backed psychometric profiling to assemble high-performing leadership teams.' },
      { title: 'Enterprise Digital Transformation Leader', field: 'Consulting & Strategy', matchScore: 92, coreStrength: 'Cross-functional synthesis + High AQ', growthHorizon: 'Continuous Growth', roadmapHint: 'Foster innovation culture while retaining strict operational milestones.' },
      { title: 'Independent Board Advisor', field: 'Corporate Governance', matchScore: 89, coreStrength: 'Risk governance + Ethical intrapersonal clarity', growthHorizon: 'Compounding Value', roadmapHint: 'Advise scaling ventures on organizational maturity and talent retention.' },
    ],
    developmentRecommendations: [
      'Maintain boundaries against executive cognitive overload through periodic digital detox.',
      'Apply DAKSH family profiling insights to guide children without projecting corporate expectations.',
      'Sponsor corporate DAKSH talent audits within organizational departments.'
    ]
  },
  {
    id: 'priya-mother',
    name: 'Priya',
    category: 'Creative',
    ageGroup: 'Mother (39 yrs)',
    headline: 'High Empathy & Creative Synthesis with Holistic Intuition',
    summary: 'Creative director and talent catalyst with superior right-brain holistic pattern recognition, emotional intelligence, and narrative vision.',
    leftBrainPercentage: 44,
    rightBrainPercentage: 56,
    dominantHemisphere: 'Right (Holistic & Creative)',
    learningStyle: {
      visual: 48,
      auditory: 32,
      kinesthetic: 20,
      primaryStyle: 'Visual',
      recommendation: 'Visualizes concepts through moodboards, spatial wireframes, color harmonies, and holistic conceptual stories.'
    },
    intelligences: [
      { key: 'spatial', label: 'Spatial-Visual', score: 95, percentile: 98, description: 'Aesthetic composition, brand identity, interior & visual design.', associatedLobe: 'Right Parietal & Occipital' },
      { key: 'interpersonal', label: 'Interpersonal', score: 92, percentile: 95, description: 'Empathetic listening, collaborative creative alignment.', associatedLobe: 'Frontal & Temporal' },
      { key: 'linguistic', label: 'Linguistic', score: 88, percentile: 91, description: 'Compelling brand narratives and emotive copy.', associatedLobe: 'Left Temporal' },
      { key: 'intrapersonal', label: 'Intrapersonal', score: 86, percentile: 89, description: 'Reflective artistic introspection and conviction.', associatedLobe: 'Prefrontal Cortex' },
      { key: 'musical', label: 'Musical-Rhythmic', score: 78, percentile: 82, description: 'Aesthetic tempo, sonic branding, and tonal balance.', associatedLobe: 'Right Temporal' },
      { key: 'naturalistic', label: 'Naturalistic', score: 76, percentile: 80, description: 'Organic textures, botanical and sustainable design cues.', associatedLobe: 'Parietal' },
      { key: 'logical', label: 'Logical-Math', score: 72, percentile: 75, description: 'Creative project budgets and structural proportion ratios.', associatedLobe: 'Left Frontal' },
      { key: 'bodily', label: 'Bodily-Kinesthetic', score: 65, percentile: 68, description: 'Tactile material curation and artistic craftsmanship.', associatedLobe: 'Motor Cortex' },
    ],
    quotients: {
      iq: { score: 125, label: 'Creative Conceptual', description: 'Identifies non-obvious cultural patterns and aesthetic harmonies.' },
      eq: { score: 140, label: 'Exceptional Empathic', description: 'Instinctively senses subtle emotional states in family and creative teams.' },
      aq: { score: 126, label: 'Resilient Adaptability', description: 'Adapts smoothly to creative pivots and changing client mandates.' },
      cq: { score: 142, label: 'Breakthrough Visionary', description: 'Generates original creative campaigns and transformative experiences.' },
    },
    topCareers: [
      { title: 'Chief Creative Officer / Design Director', field: 'Creative & Media', matchScore: 98, coreStrength: 'High CQ + Spatial aesthetics + High EQ', growthHorizon: 'High Creative Influence', roadmapHint: 'Lead holistic brand identity and multi-channel creative storytelling.' },
      { title: 'Human-Centered Experience Architect', field: 'UX & Design Thinking', matchScore: 93, coreStrength: 'Interpersonal empathy + Visual spatial mapping', growthHorizon: 'Rapidly Growing Global Need', roadmapHint: 'Bridge user psychology with digital product interfaces.' },
      { title: 'Educational Media & Publishing Director', field: 'Education & Content', matchScore: 90, coreStrength: 'Linguistic resonance + Visual engagement', growthHorizon: 'High Impact', roadmapHint: 'Create transformative visual learning curricula for youth.' },
    ],
    developmentRecommendations: [
      'Pair high creative ideation with structured agile milestones to avoid scope expansion.',
      'Celebrate your children’s unique cognitive profiles without imposing uniform creative expectations.',
      'Engage in regular mindfulness to replenish creative energy.'
    ]
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    pillar: 'Hemispheric Dominance',
    categoryLabel: 'Cognitive Framing',
    scenario: 'You are presented with an unfamiliar complex system that suddenly malfunctioned.',
    question: 'What is your immediate instinctive reflex to diagnose the breakdown?',
    options: [
      {
        text: 'Trace the component flow step-by-step using sequential logic, verifying inputs and outputs at each junction.',
        bias: { leftBrain: 8, rightBrain: 2, visual: 3, auditory: 2, kinesthetic: 3, intelligenceKey: 'logical', eqDelta: 1, aqDelta: 2 }
      },
      {
        text: 'Step back to perceive the entire ecosystem overview, looking for anomalous environmental patterns and intuitive connections.',
        bias: { leftBrain: 2, rightBrain: 8, visual: 4, auditory: 1, kinesthetic: 3, intelligenceKey: 'spatial', eqDelta: 2, aqDelta: 2 }
      },
      {
        text: 'Immediately open the physical/code chassis and begin testing hands-on with real inputs to see physical feedback.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 2, auditory: 1, kinesthetic: 7, intelligenceKey: 'bodily', eqDelta: 1, aqDelta: 3 }
      },
      {
        text: 'Gather the individuals who were operating it and ask detailed questions about what changed before the breakdown.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 1, auditory: 6, kinesthetic: 1, intelligenceKey: 'interpersonal', eqDelta: 3, aqDelta: 1 }
      }
    ]
  },
  {
    id: 2,
    pillar: 'Hemispheric Dominance',
    categoryLabel: 'Processing Style',
    scenario: 'When learning a brand new theoretical subject with no prior background:',
    question: 'Which method gives you the strongest comprehension and retention?',
    options: [
      {
        text: 'A structured breakdown of definitions, mathematical axioms, and orderly categorized notes.',
        bias: { leftBrain: 9, rightBrain: 1, visual: 3, auditory: 3, kinesthetic: 2, intelligenceKey: 'logical', eqDelta: 1, aqDelta: 2 }
      },
      {
        text: 'A conceptual story, metaphor, or visual mindmap that connects the big picture to human experiences.',
        bias: { leftBrain: 2, rightBrain: 8, visual: 6, auditory: 2, kinesthetic: 2, intelligenceKey: 'spatial', eqDelta: 2, aqDelta: 1 }
      },
      {
        text: 'Engaging in an energetic seminar discussion or podcast debate where contrasting perspectives collide.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 1, auditory: 8, kinesthetic: 1, intelligenceKey: 'linguistic', eqDelta: 3, aqDelta: 2 }
      },
      {
        text: 'Building a mini-project, simulator sandbox, or real-life model right from day one.',
        bias: { leftBrain: 5, rightBrain: 5, visual: 2, auditory: 1, kinesthetic: 8, intelligenceKey: 'bodily', eqDelta: 2, aqDelta: 3 }
      }
    ]
  },
  {
    id: 3,
    pillar: 'Multiple Intelligence',
    categoryLabel: 'Spatial & Geometry',
    scenario: 'You are shown an architectural blueprint or complex schematic diagram:',
    question: 'How easily can your mind manipulate this information?',
    options: [
      {
        text: 'I instantly visualize the 3D space in my mind and can mentally rotate the structure through different lighting and angles.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 8, auditory: 1, kinesthetic: 3, intelligenceKey: 'spatial', eqDelta: 1, aqDelta: 2 }
      },
      {
        text: 'I focus on checking the dimensions, scale ratios, and numerical specifications for mathematical alignment.',
        bias: { leftBrain: 8, rightBrain: 2, visual: 3, auditory: 2, kinesthetic: 2, intelligenceKey: 'logical', eqDelta: 1, aqDelta: 2 }
      },
      {
        text: 'I mentally simulate how people would walk through, interact, and feel within the hallways and rooms.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 4, auditory: 3, kinesthetic: 2, intelligenceKey: 'interpersonal', eqDelta: 4, aqDelta: 1 }
      },
      {
        text: 'I prefer seeing an actual tactile 3D physical mock-up or touching materials rather than studying a 2D drawing.',
        bias: { leftBrain: 2, rightBrain: 8, visual: 2, auditory: 1, kinesthetic: 8, intelligenceKey: 'bodily', eqDelta: 2, aqDelta: 2 }
      }
    ]
  },
  {
    id: 4,
    pillar: 'Multiple Intelligence',
    categoryLabel: 'Linguistic & Semantic',
    scenario: 'You need to explain a complex and sensitive policy change to a skeptical audience:',
    question: 'What is your primary communication strength?',
    options: [
      {
        text: 'Selecting precise, evocative language and rhetorical balance that disarms emotional defensiveness.',
        bias: { leftBrain: 6, rightBrain: 4, visual: 2, auditory: 7, kinesthetic: 1, intelligenceKey: 'linguistic', eqDelta: 3, aqDelta: 2 }
      },
      {
        text: 'Presenting unambiguous data tables, statistical projections, and empirical cause-and-effect graphs.',
        bias: { leftBrain: 9, rightBrain: 1, visual: 5, auditory: 2, kinesthetic: 1, intelligenceKey: 'logical', eqDelta: 1, aqDelta: 2 }
      },
      {
        text: 'Reading the emotional room dynamics, validating unspoken concerns, and building bilateral trust.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 2, auditory: 4, kinesthetic: 2, intelligenceKey: 'interpersonal', eqDelta: 5, aqDelta: 2 }
      },
      {
        text: 'Drawing an intuitive diagram on a whiteboard live in front of the group so everyone can see the vision.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 7, auditory: 2, kinesthetic: 3, intelligenceKey: 'spatial', eqDelta: 2, aqDelta: 2 }
      }
    ]
  },
  {
    id: 5,
    pillar: 'Multiple Intelligence',
    categoryLabel: 'Intrapersonal & Focus',
    scenario: 'After experiencing an unexpected personal or professional setback:',
    question: 'How do you process your internal state?',
    options: [
      {
        text: 'I retreat into quiet solitary reflection, journal the lesson, and recalibrate my internal principles.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 2, auditory: 3, kinesthetic: 2, intelligenceKey: 'intrapersonal', eqDelta: 4, aqDelta: 3 }
      },
      {
        text: 'I break down the failure mechanically into controllable vs uncontrollable variables to formulate a corrective drill.',
        bias: { leftBrain: 8, rightBrain: 2, visual: 3, auditory: 2, kinesthetic: 3, intelligenceKey: 'logical', eqDelta: 2, aqDelta: 4 }
      },
      {
        text: 'I immediately contact a trusted confidant, mentor, or peer circle to talk through the emotional shockwaves.',
        bias: { leftBrain: 2, rightBrain: 8, visual: 1, auditory: 7, kinesthetic: 1, intelligenceKey: 'interpersonal', eqDelta: 4, aqDelta: 2 }
      },
      {
        text: 'I channel the nervous energy into intense physical motion, sports, or tangible manual tasks to reset my nervous system.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 1, auditory: 1, kinesthetic: 8, intelligenceKey: 'bodily', eqDelta: 3, aqDelta: 3 }
      }
    ]
  },
  {
    id: 6,
    pillar: 'Learning Modality',
    categoryLabel: 'Sensory Recall',
    scenario: 'Think back to an important presentation or lecture you attended a month ago:',
    question: 'What memory element surfaces first and clearest in your mind?',
    options: [
      {
        text: 'The visual slides, color schemes, diagram layouts, and the physical demeanor of the speaker.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 9, auditory: 1, kinesthetic: 1, intelligenceKey: 'spatial', eqDelta: 1, aqDelta: 1 }
      },
      {
        text: 'The exact phrasing, voice inflection, cadence, and auditory arguments spoken.',
        bias: { leftBrain: 5, rightBrain: 5, visual: 1, auditory: 9, kinesthetic: 1, intelligenceKey: 'linguistic', eqDelta: 2, aqDelta: 1 }
      },
      {
        text: 'The physical sensations, live exercises, room atmosphere, and hands-on demonstrations performed.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 1, auditory: 1, kinesthetic: 9, intelligenceKey: 'bodily', eqDelta: 2, aqDelta: 2 }
      },
      {
        text: 'The underlying logical framework and intellectual epiphany that connected disparate ideas.',
        bias: { leftBrain: 7, rightBrain: 3, visual: 3, auditory: 3, kinesthetic: 2, intelligenceKey: 'logical', eqDelta: 2, aqDelta: 2 }
      }
    ]
  },
  {
    id: 7,
    pillar: 'Learning Modality',
    categoryLabel: 'Problem Execution',
    scenario: 'When preparing for a high-stakes exam, certification, or client deliverable:',
    question: 'Which study or preparation behavior dominates your schedule?',
    options: [
      {
        text: 'Color-coded summary sheets, flow diagrams, mind-maps, and highlighters.',
        bias: { leftBrain: 5, rightBrain: 5, visual: 8, auditory: 1, kinesthetic: 2, intelligenceKey: 'spatial', eqDelta: 1, aqDelta: 2 }
      },
      {
        text: 'Explaining concepts out loud to myself, listening to recorded lectures, or verbal quiz sessions with a peer.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 1, auditory: 8, kinesthetic: 1, intelligenceKey: 'linguistic', eqDelta: 2, aqDelta: 2 }
      },
      {
        text: 'Repeatedly solving mock papers with pen on paper or building practical test prototypes under timed conditions.',
        bias: { leftBrain: 6, rightBrain: 4, visual: 2, auditory: 1, kinesthetic: 8, intelligenceKey: 'bodily', eqDelta: 2, aqDelta: 3 }
      },
      {
        text: 'Deep solitary immersion analyzing edge cases, historical patterns, and error logs.',
        bias: { leftBrain: 7, rightBrain: 3, visual: 4, auditory: 2, kinesthetic: 3, intelligenceKey: 'intrapersonal', eqDelta: 2, aqDelta: 3 }
      }
    ]
  },
  {
    id: 8,
    pillar: 'Adversity & EQ',
    categoryLabel: 'Crisis Resilience (AQ)',
    scenario: 'Midway through an urgent deadline, your primary approach is completely rejected by stakeholders:',
    question: 'How do you respond within the first 60 minutes?',
    options: [
      {
        text: 'I immediately scrap the ego attachment, identify what criteria were missed, and pivot to a resilient Plan B without lingering frustration.',
        bias: { leftBrain: 6, rightBrain: 4, visual: 3, auditory: 2, kinesthetic: 4, intelligenceKey: 'logical', eqDelta: 3, aqDelta: 5 }
      },
      {
        text: 'I calmly assemble the core decision makers into a room to understand underlying apprehensions and align expectations.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 1, auditory: 5, kinesthetic: 1, intelligenceKey: 'interpersonal', eqDelta: 5, aqDelta: 3 }
      },
      {
        text: 'I take 15 minutes of quiet solitude to synthesize the feedback, then map out a creative synthesis that bridges both positions.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 4, auditory: 2, kinesthetic: 2, intelligenceKey: 'intrapersonal', eqDelta: 4, aqDelta: 4 }
      },
      {
        text: 'I roll up my sleeves and build 3 quick rapid prototypes in 2 hours to let empirical results resolve the disagreement.',
        bias: { leftBrain: 5, rightBrain: 5, visual: 3, auditory: 1, kinesthetic: 6, intelligenceKey: 'bodily', eqDelta: 2, aqDelta: 4 }
      }
    ]
  },
  {
    id: 9,
    pillar: 'Adversity & EQ',
    categoryLabel: 'Emotional Intelligence (EQ)',
    scenario: 'A colleague or peer breaks down emotionally in a team setting due to severe stress:',
    question: 'What is your instinctive interpersonal response?',
    options: [
      {
        text: 'Offer quiet empathetic presence, de-escalate the room, and listen without judgment before offering advice.',
        bias: { leftBrain: 2, rightBrain: 8, visual: 1, auditory: 6, kinesthetic: 1, intelligenceKey: 'interpersonal', eqDelta: 5, aqDelta: 2 }
      },
      {
        text: 'Immediately step in to quietly absorb their critical backlog items so their immediate pressure is relieved.',
        bias: { leftBrain: 5, rightBrain: 5, visual: 2, auditory: 2, kinesthetic: 5, intelligenceKey: 'bodily', eqDelta: 4, aqDelta: 3 }
      },
      {
        text: 'Help them logically categorize what is urgent versus what can be safely postponed or renegotiated.',
        bias: { leftBrain: 7, rightBrain: 3, visual: 3, auditory: 3, kinesthetic: 2, intelligenceKey: 'logical', eqDelta: 3, aqDelta: 3 }
      },
      {
        text: 'Frame the moment within a broader life narrative to help them regain perspective on their enduring strengths.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 2, auditory: 5, kinesthetic: 1, intelligenceKey: 'linguistic', eqDelta: 4, aqDelta: 2 }
      }
    ]
  },
  {
    id: 10,
    pillar: 'Multiple Intelligence',
    categoryLabel: 'Naturalistic & Environmental',
    scenario: 'You find yourself in a vast outdoor nature reserve, botanical garden, or complex rural ecosystem:',
    question: 'Where does your sensory attention automatically wander?',
    options: [
      {
        text: 'Observing subtle biological taxonomy: bird calls, leaf vein patterns, soil health, and seasonal weather shifts.',
        bias: { leftBrain: 4, rightBrain: 6, visual: 6, auditory: 3, kinesthetic: 3, intelligenceKey: 'naturalistic', eqDelta: 3, aqDelta: 2 }
      },
      {
        text: 'Calculating topographical elevations, trail distances, sun coordinates, and water flow velocities.',
        bias: { leftBrain: 8, rightBrain: 2, visual: 4, auditory: 1, kinesthetic: 4, intelligenceKey: 'logical', eqDelta: 1, aqDelta: 3 }
      },
      {
        text: 'Immersing in the acoustic rhythms, wind harmonies, and organic sound textures of the environment.',
        bias: { leftBrain: 2, rightBrain: 8, visual: 2, auditory: 7, kinesthetic: 2, intelligenceKey: 'musical', eqDelta: 3, aqDelta: 1 }
      },
      {
        text: 'Reflecting on existential cycles of life, human scale, and my personal journey within the universe.',
        bias: { leftBrain: 3, rightBrain: 7, visual: 3, auditory: 2, kinesthetic: 2, intelligenceKey: 'intrapersonal', eqDelta: 4, aqDelta: 2 }
      }
    ]
  }
];

export const INSTITUTIONAL_PARTNERS = [
  { name: 'IRCON International', category: 'Infrastructure & Engineering', type: 'Public Sector Enterprise', impact: '3,200+ Engineers & Managers Profiled' },
  { name: 'Central Electronics Ltd.', category: 'High-Tech Defense & Solar', type: 'Govt. of India Enterprise', impact: '1,800+ Technical Specialists Assessed' },
  { name: 'CII Indian Women Network', category: 'Leadership & Industry Body', type: 'National Industry Federation', impact: '4,500+ Women Leaders & Entrepreneurs' },
  { name: 'AIIMS Mental Health Festival', category: 'Medical & Psychological Health', type: 'Premier Institute of India', impact: 'Keynote Potential Screening Partner' },
  { name: 'Startup India', category: 'Innovation & Entrepreneurship', type: 'National Flagship Initiative', impact: 'Recognized Innovation System' },
  { name: 'SPARK Collective', category: 'Educational Excellence', type: 'School Consortium', impact: '100+ Partner Educational Centers' }
];

export const BRAIN_LOBES = [
  {
    lobe: 'Frontal Lobe (Prefrontal)',
    fingerprints: 'Thumb (Left & Right)',
    cognitiveDomain: 'Action, Planning, Goal Setting & Social Empathy',
    details: 'Maps interpersonal motivation, leadership determination, vision formulation, and self-regulatory discipline.'
  },
  {
    lobe: 'Frontal Lobe (Motor Cortex)',
    fingerprints: 'Index Finger (Left & Right)',
    cognitiveDomain: 'Logical Reasoning & Spatial Concept Synthesis',
    details: 'Governs mathematical deduction, structural design, sequential computation, and grammatical framing.'
  },
  {
    lobe: 'Parietal Lobe',
    fingerprints: 'Middle Finger (Left & Right)',
    cognitiveDomain: 'Bodily-Kinesthetic Coordination & Tactile Sense',
    details: 'Regulates fine motor movements, physical athletics, instrument dexterity, and 3D spatial positioning.'
  },
  {
    lobe: 'Temporal Lobe',
    fingerprints: 'Ring Finger (Left & Right)',
    cognitiveDomain: 'Auditory Processing, Language Cadence & Music',
    details: 'Decodes phonetics, auditory memory, musical melody, emotional voice cadence, and verbal articulation.'
  },
  {
    lobe: 'Occipital Lobe',
    fingerprints: 'Little Finger (Left & Right)',
    cognitiveDomain: 'Visual Perception, Geometry & Aesthetic Sense',
    details: 'Controls visual observation, color sensitivity, typographic discernment, and spatial depth judgment.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'What is the Dermatoglyphics Multiple Intelligence Test and how does it correlate with brain potential?',
    answer: 'Dermatoglyphics is the scientific study of ridged epidermal patterns on human fingers and palms. Embryological research shows that dermal ridges form between the 13th and 19th week of gestation, contemporaneous with the formation of the cerebral cortex. Because both originate from the ectoderm tissue, quantitative ridge density and pattern classifications in the Dermatoglyphics Multiple Intelligence Test correlate with innate synaptic distribution across the five cerebral lobes.'
  },
  {
    question: 'How does DAKSH differ from ordinary online quiz tests?',
    answer: 'Standard online quizzes rely strictly on subjective self-reporting, which is easily skewed by peer pressure, parental bias, or temporary mood states. DAKSH uniquely combines three independent scientific lenses: (1) Biometric Dermatoglyphics Multiple Intelligence Test evaluation for innate hardwired potential, (2) Standardized Psychometric Big-Five analytics for behavioral tendencies, and (3) Adaptive Cognitive Aptitude testing for real-time problem-solving capacity.'
  },
  {
    question: 'How long does an assessment take, and when is the report generated?',
    answer: 'The fast digital screening takes only 3 to 10 minutes. For comprehensive institutional or clinical evaluations with Dermatoglyphics Multiple Intelligence Test biometric ridge analysis, the process takes approximately 20 minutes. All comprehensive reports (35+ pages in the full suite) are computed algorithmically and made available in your dashboard with interactive visualizations.'
  },
  {
    question: 'Is DAKSH suitable for school students choosing streams after 10th or 12th?',
    answer: 'Yes! Stream and career confusion is the #1 application of DAKSH in India. Rather than blindly chasing popular trends, students and parents receive clear clarity on whether their natural cognitive wiring leans towards pure sciences (PCM/PCB), computational engineering, commerce and actuarial finance, design/architecture, or humanities and civil services.'
  },
  {
    question: 'What happens during the optional 1-on-1 counselor debrief?',
    answer: 'A certified psychologist and DAKSH master counselor walks you or your child through the diagnostic report. They identify blind spots, reconcile differences between parents and students, provide concrete academic or career milestones, and formulate a personalized 6-month growth plan.'
  },
  {
    question: 'How does DAKSH protect student and individual data privacy?',
    answer: 'All assessment telemetry and biometric patterns are encrypted using AES-256 protocols. Fingerprint images are processed solely to extract mathematical ridge indices and are never stored or shared with external third parties or advertisers. We comply with Indian Digital Personal Data Protection (DPDP) standards.'
  }
];
