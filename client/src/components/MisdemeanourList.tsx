import { MisdemeanourContext } from "../App";
import { useContext } from 'react';

const MisdemeanourList: React.FC = () => {

  const misdemeanours = useContext(MisdemeanourContext);

  return (
    <div>
      <h2>Misdemeanours:</h2>
      <ul>
        {misdemeanours.map(m => <li key={m.citizenId}>{m.citizenId}</li>)}
      </ul>
    </div>
  );
}

export default MisdemeanourList;