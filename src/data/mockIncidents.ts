
import { Incident } from '../types/incident';
import { v4 as uuidv4 } from 'uuid';

export const mockIncidents: Incident[] = [
  {
    id: uuidv4(),
    title: "Autonomous Agent Misclassified Data",
    description: "An AI model mislabeled critical medical data during pre-deployment testing. Manual audit flagged the error before deployment.",
    severity: "Medium",
    reported_at: "2025-04-20T10:15:00Z"
  },
  {
    id: uuidv4(),
    title: "AI Recommendation System Bias",
    description: "An AI recommendation system showed significant bias against certain demographic groups. System was taken offline for retraining.",
    severity: "High",
    reported_at: "2025-04-19T08:30:00Z"
  },
  {
    id: uuidv4(),
    title: "Natural Language Model Inappropriate Response",
    description: "A conversational AI model generated inappropriate content when prompted with ambiguous questions. Additional content filters were implemented.",
    severity: "Medium",
    reported_at: "2025-04-18T14:45:00Z"
  },
  {
    id: uuidv4(),
    title: "Algorithm Runtime Exception",
    description: "An AI decision-making system encountered an unhandled exception case causing temporary service disruption. Issue was fixed in latest patch.",
    severity: "Low",
    reported_at: "2025-04-17T11:20:00Z"
  },
  {
    id: uuidv4(),
    title: "Privacy Leak in Training Data",
    description: "Personally identifiable information was inadvertently included in AI training dataset. All models trained on this data were recalled and retrained.",
    severity: "High",
    reported_at: "2025-04-15T16:10:00Z"
  },
  {
    id: uuidv4(),
    title: "Edge Case Performance Degradation",
    description: "The AI vision system showed poor performance in low-light conditions, potentially affecting safety-critical applications. System now displays confidence scores.",
    severity: "Medium",
    reported_at: "2025-04-12T09:05:00Z"
  },
  {
    id: uuidv4(),
    title: "Model Drift Detected",
    description: "Gradual performance degradation noted in production AI system due to changing input patterns. Retraining scheduled with updated data.",
    severity: "Low",
    reported_at: "2025-04-10T13:40:00Z"
  }
];
