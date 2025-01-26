
import React, { useState } from 'react';

const SortBar = ({ onSortChange, onClassFilterChange }) => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
    onClassFilterChange(selectedClass); // Pass selected class to the parent component
  };

  const handleSortChange = (event) => {
    onSortChange(event.target.value); // Sort function passed from BotCollection
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sortCriteria">Sort By:</label>
      <select id="sortCriteria" onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>

      <label htmlFor="classFilter">Filter By Class:</label>
      <select id="classFilter" onChange={handleClassChange}>
        <option value="">All Classes</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
};

export default SortBar;
