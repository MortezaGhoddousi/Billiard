import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استفاده از useNavigate به جای useHistory

function CMSTournament() {
  const [tournament, setTournament] = useState({
    name: '',
    players: [],
    numPlayers: 2,
  });

  const navigate = useNavigate(); // استفاده از useNavigate

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTournament({ ...tournament, [id]: value });
  };

  const handlePlayerChange = (index, e) => {
    const updatedPlayers = [...tournament.players];
    updatedPlayers[index] = e.target.value;
    setTournament({ ...tournament, players: updatedPlayers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال داده‌ها و انتقال به صفحه مسابقه
    navigate('/tournament', { state: { tournament } }); // استفاده از navigate به جای history.push
  };

  return (
    <section className="tournament-form">
      <form onSubmit={handleSubmit}>
        <h1>شروع مسابقه جدید</h1>
        <label>
          نام مسابقه:
          <input
            type="text"
            id="name"
            value={tournament.name}
            onChange={handleInputChange}
            placeholder="نام مسابقه را وارد کنید"
          />
        </label>

        <label>
          تعداد بازیکنان:
          <input
            type="number"
            id="numPlayers"
            value={tournament.numPlayers}
            onChange={handleInputChange}
            min="2"
            max="64"
          />
        </label>

        <div className="player-inputs">
          {Array.from({ length: tournament.numPlayers }).map((_, index) => (
            <div key={index}>
              <label>{`بازیکن ${index + 1}:`}</label>
              <input
                type="text"
                value={tournament.players[index] || ''}
                onChange={(e) => handlePlayerChange(index, e)}
                placeholder={`نام بازیکن ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <input type="submit" value="ثبت مسابقه" />
      </form>
    </section>
  );
}

export default CMSTournament;
