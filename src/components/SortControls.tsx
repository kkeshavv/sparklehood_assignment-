
import React from 'react';
import { SortOrder } from '../types/incident';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface SortControlsProps {
  sortOrder: SortOrder;
  onSortChange: (sortOrder: SortOrder) => void;
}

const SortControls: React.FC<SortControlsProps> = ({ sortOrder, onSortChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {sortOrder === 'newest' ? (
            <>
              <ArrowDown className="h-4 w-4" /> Newest First
            </>
          ) : (
            <>
              <ArrowUp className="h-4 w-4" /> Oldest First
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onSortChange('newest')} className="flex items-center gap-2">
          <ArrowDown className="h-4 w-4" /> Newest First
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortChange('oldest')} className="flex items-center gap-2">
          <ArrowUp className="h-4 w-4" /> Oldest First
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortControls;
