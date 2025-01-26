import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import SortBar from './ SortBar';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('health'); // Default sort criteria
  const [filteredClass, setFilteredClass] = useState(''); // State for filtering by class

  // Fetch bots from the JSON server
  useEffect(() => {
    fetch('http://localhost:3000/bots')  // Keeping your original fetch URL
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Handle sorting change
  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  // Handle class filter change
  const handleClassFilterChange = (selectedClass) => {
    setFilteredClass(selectedClass); // Update filtered class
  };

  // Sort the bots based on the selected criteria
  const sortedBots = bots.sort((a, b) => {
    if (a[sortCriteria] < b[sortCriteria]) return -1;
    if (a[sortCriteria] > b[sortCriteria]) return 1;
    return 0;
  });

  // Filter the bots based on the selected class
  const filteredBots = sortedBots.filter((bot) => {
    if (filteredClass === '') return true; // Show all bots if no class is selected
    return bot.bot_class === filteredClass;
  });

  // Enlist a bot into the army
  const handleEnlist = (bot) => {
    if (botArmy.find((b) => b.id === bot.id)) {
      alert(`${bot.name} is already in your army.`);
      return;
    }
    setBotArmy([...botArmy, bot]);
  };

  // Release a bot from the army
  const handleRelease = (bot) => {
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));
  };

  // Discharge a bot (delete from backend)
  const handleDischarge = (bot) => {
    // Remove bot from the army
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));

    // Delete bot from the server
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    }).then(() => {
      alert(`${bot.name} has been discharged from service.`);
    });
  };

  return (
    <div className="container">
      {/* Sort Bar should be at the top */}
      <SortBar
        onSortChange={handleSortChange}
        onClassFilterChange={handleClassFilterChange} // Pass filter handler to SortBar
      />

      <div className="content">
        <h2>Bot Collection</h2>
        <div className="bot-collection">
          {filteredBots.map((bot) => (
            <BotCard key={bot.id} bot={bot} onEnlist={handleEnlist} />
          ))}
        </div>

        <h2>Your Bot Army</h2>
        <div className="bot-army">
          {botArmy.map((bot) => (
            <div key={bot.id} className="bot-card">
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>{bot.bot_class}</p>
              <button onClick={() => handleRelease(bot)}>Release</button>
              <button onClick={() => handleDischarge(bot)}>Discharge</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotCollection;
