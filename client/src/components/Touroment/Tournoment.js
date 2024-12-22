import React from 'react';
import '../../css/Tournoment.css';

const Tournoment = () => {
  const players = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
    "Player 7",
    "Player 8",
  ];

  return (
    <div className="bracket-container">
      <div className="round round-1">
        {players.map((player, index) => (
          <div key={index} className="match">
            <img className='profile' src='./images/images.png' alt='profile'/>
            <span>{player}</span>
          </div>
        ))}
      </div>
      <div className="round round-2">
        {[...Array(players.length / 2)].map((_, index) => (
          <div key={index} className="match">
            <img className='profile' src='./images/images.png' alt='profile'/>
            <span>Winner</span>
          </div>
        ))}
      </div>
      <div className="round semi-finals">
        {[...Array(players.length / 4)].map((_, index) => (
          <div key={index} className="match">
            <img className='profile' src='./images/images.png' alt='profile'/>
            <span>Winner</span>
          </div>
        ))}
      </div>
      <div className="round final">
        <div className="match">
        <img className='profile' src='./images/images.png' alt='profile'/>
          <span>Winner</span>
        </div>
      </div>
    </div>
  );
};

export default Tournoment;
