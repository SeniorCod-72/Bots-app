import React from 'react';

function YourBotArmy({ army, dischargeBot, deleteBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => dischargeBot(bot.id)}>Release</button>
            <button onClick={() => deleteBot(bot.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
