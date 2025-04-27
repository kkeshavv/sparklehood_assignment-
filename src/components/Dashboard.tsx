import React, { useState, useEffect } from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types/incident';
import Navbar from './Navbar';
import FilterControls from './FilterControls';
import SortControls from './SortControls';
import IncidentCard from './IncidentCard';
import EmptyState from './EmptyState';
import IncidentForm from './IncidentForm';
import { mockIncidents } from '../data/mockIncidents';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  useEffect(() => {
    let result = [...incidents];
    
    if (severityFilter !== 'All') {
      result = result.filter(incident => incident.severity === severityFilter);
    }
    
    result.sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredIncidents(result);
  }, [incidents, severityFilter, sortOrder]);

  const handleFilterChange = (filter: SeverityFilter) => {
    setSeverityFilter(filter);
  };

  const handleSortChange = (order: SortOrder) => {
    setSortOrder(order);
  };

  const handleAddIncident = (incident: Incident) => {
    setIncidents([incident, ...incidents]);
  };

  return (
    <div 
      className="min-h-screen flex flex-col" 
      style={{ 
        backgroundImage: `url('/images/robot-bg.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'soft-light',
        backgroundColor: 'rgba(255, 255, 255, 0.85)' 
      }}
    >
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-6 max-w-7xl bg-white/80 backdrop-blur-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-4 border-b">
            <div className="flex items-center gap-4">
              <FilterControls 
                activeFilter={severityFilter} 
                onFilterChange={handleFilterChange} 
              />
            </div>
            <div className="flex items-center gap-4">
              <SortControls 
                sortOrder={sortOrder} 
                onSortChange={handleSortChange} 
              />
              <IncidentForm onSubmit={handleAddIncident} />
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredIncidents.length > 0 ? (
              filteredIncidents.map(incident => (
                <IncidentCard key={incident.id} incident={incident} />
              ))
            ) : (
              <EmptyState message={`No ${severityFilter !== 'All' ? severityFilter : ''} incidents found.`} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
