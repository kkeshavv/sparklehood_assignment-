
import React from 'react';
import { SeverityFilter } from '../types/incident';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FilterControlsProps {
  activeFilter: SeverityFilter;
  onFilterChange: (filter: SeverityFilter) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ activeFilter, onFilterChange }) => {
  const filters: SeverityFilter[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="outline"
          onClick={() => onFilterChange(filter)}
          className={cn(
            'transition-all duration-200',
            activeFilter === filter && 'bg-primary text-primary-foreground'
          )}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
};

export default FilterControls;
