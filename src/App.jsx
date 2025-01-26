import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from './ SortBar';



function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('https://bots-si0g.onrender.com/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
    }
  };

  const dischargeBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  const deleteBot = (id) => {
    fetch(`https://bots-si0g.onrender.com/bots${id}`, {
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
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={army} dischargeBot={dischargeBot} deleteBot={deleteBot} />
      <SortBar/>
      
    </div>
  );
}

export default App;

