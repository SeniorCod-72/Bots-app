import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
};

export default BotCard;
