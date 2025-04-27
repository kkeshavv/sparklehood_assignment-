
import React, { useState } from 'react';
import { Incident } from '../types/incident';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SeverityBadge from './SeverityBadge';
import { format } from 'date-fns';

interface IncidentCardProps {
  incident: Incident;
}

const IncidentCard: React.FC<IncidentCardProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formattedDate = format(new Date(incident.reported_at), "MMMM dd, yyyy, h:mm a");

  return (
    <Card className="hover-scale hover:bg-gray-50">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <h3 className="text-lg font-semibold">{incident.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{formattedDate}</p>
        </div>
        <SeverityBadge severity={incident.severity} />
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-2 animate-fade-in">
          <p className="text-sm text-gray-700">{incident.description}</p>
        </CardContent>
      )}
      
      <CardFooter className="pt-2 pb-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" /> Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" /> View Details
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IncidentCard;
