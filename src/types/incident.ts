
export type Severity = 'Low' | 'Medium' | 'High';

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  reported_at: string;
}

export type SortOrder = 'newest' | 'oldest';
export type SeverityFilter = Severity | 'All';
