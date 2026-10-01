export interface IntelligenceScore {
  key: string;
  label: string;
  score: number; // 0 to 100
  percentile: number;
  description: string;
  associatedLobe: string;
}

export interface LearningStyleVAK {
  visual: number; // e.g. 45%
  auditory: number; // e.g. 25%
  kinesthetic: number; // e.g. 30%
  primaryStyle: 'Visual' | 'Auditory' | 'Kinesthetic' | 'Multimodal';
  recommendation: string;
}

export interface Quotients {
  iq: { score: number; label: string; description: string };
  eq: { score: number; label: string; description: string };
  aq: { score: number; label: string; description: string };
  cq: { score: number; label: string; description: string };
}

export interface CareerPath {
  title: string;
  field: string;
  matchScore: number;
  coreStrength: string;
  growthHorizon: string;
  roadmapHint: string;
}

export interface BenchmarkPersona {
  id: string;
  name: string;
  category: 'Student' | 'Professional' | 'Entrepreneur' | 'Creative';
  ageGroup: string;
  headline: string;
  summary: string;
  leftBrainPercentage: number;
  rightBrainPercentage: number;
  dominantHemisphere: 'Left (Analytical & Logical)' | 'Right (Holistic & Creative)' | 'Bilateral Equilibrium';
  learningStyle: LearningStyleVAK;
  intelligences: IntelligenceScore[];
  quotients: Quotients;
  topCareers: CareerPath[];
  developmentRecommendations: string[];
}

export interface AssessmentOption {
  text: string;
  bias: {
    leftBrain: number;
    rightBrain: number;
    visual: number;
    auditory: number;
    kinesthetic: number;
    intelligenceKey: string;
    eqDelta: number;
    aqDelta: number;
  };
}

export interface AssessmentQuestion {
  id: number;
  pillar: 'Hemispheric Dominance' | 'Multiple Intelligence' | 'Learning Modality' | 'Adversity & EQ';
  categoryLabel: string;
  scenario: string;
  question: string;
  options: AssessmentOption[];
}

export interface UserAssessmentState {
  currentQuestionIndex: number;
  selectedAnswers: Record<number, number>; // questionId -> optionIndex
  isComplete: boolean;
}
