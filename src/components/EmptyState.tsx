
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message = "No incidents found." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center animate-fade-in">
      <AlertTriangle className="h-16 w-16 text-gray-300 mb-4" />
      <h3 className="text-xl font-medium text-gray-500">{message}</h3>
    </div>
  );
};

export default EmptyState;
