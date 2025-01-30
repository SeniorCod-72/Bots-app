import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './ SortBar';

function App() {

// State to store all available bots

  const [bots, setBots] = useState([]);
   // State to store the user's selected bot army
  const [army, setArmy] = useState([]);

// Fetch bots data from API when component mounts
  useEffect(() => {
    fetch('https://bots-si0g.onrender.com/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);
// Function to add a bot to the army if its class is not already enlisted
  const enlistBot = (bot) => {
    if (!army.some(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };
// Function to remove a bot from the army by its ID
  const dischargeBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  // Function to delete a bot from both the army and the main bot list
  const deleteBot = (id) => {
    fetch(`https://bots-si0g.onrender.com/bots/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setArmy(army.filter(bot => bot.id !== id));
        setBots(bots.filter(bot => bot.id !== id));
      });
  };

  return (
    <div className="App">
      <h1>Bots app</h1>
      {/* Display all available bots and allow enlisting */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
{/* Display enlisted bots and allow discharging or deleting */}
      <YourBotArmy army={army} dischargeBot={dischargeBot} deleteBot={deleteBot} />
      {/* Sorting bar for bots */}
      <SortBar/>
      
    </div>
  );
}

export default App;

