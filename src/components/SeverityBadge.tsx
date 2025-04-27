
import React from 'react';
import { Severity } from '../types/incident';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SeverityBadgeProps {
  severity: Severity;
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const severityClasses = {
    Low: 'bg-severity-low text-white',
    Medium: 'bg-severity-medium text-white',
    High: 'bg-severity-high text-white',
  };

  return (
    <Badge className={cn('font-medium', severityClasses[severity])}>
      {severity}
    </Badge>
  );
};

export default SeverityBadge;
