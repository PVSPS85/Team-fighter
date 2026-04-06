import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

const FilterTabs = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All', 'Low', 'Moderate', 'High'];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
      <div className="view-toggles">
        <button className="view-btn active"><LayoutGrid size={18} /></button>
        <button className="view-btn"><List size={18} /></button>
      </div>
    </div>
  );
};

export default FilterTabs;
