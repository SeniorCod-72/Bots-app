
import React from 'react';

const SortBar = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value); // Pass the selected sorting criteria back to the parent
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
