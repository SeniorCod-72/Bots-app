import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
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
    fetch(`http://localhost:3000/bots${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setArmy(army.filter(bot => bot.id !== id));
        setBots(bots.filter(bot => bot.id !== id));
      });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={army} dischargeBot={dischargeBot} deleteBot={deleteBot} />
    </div>
  );
}

export default App;

