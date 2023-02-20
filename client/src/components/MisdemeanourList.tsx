import { MisdemeanourContext } from "../App";
import { useContext } from 'react';
import { Misdemeanour } from "../types/misdemeanours.types";

const MisdemeanourList: React.FC = () => {
  const misdemeanours = useContext(MisdemeanourContext);

  return (
    <div>
      <h2>Misdemeanours:</h2>
      <MisdemeanourTable misdemeanours={misdemeanours} />
    </div>
  );
};

const MisdemeanourTable: React.FC<{ misdemeanours: Misdemeanour[] }> = ({ misdemeanours }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Misdemeanour</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {misdemeanours.map(m => (
          <tr key={m.citizenId}>
            <td>{m.citizenId}</td>
            <td>{m.misdemeanour}</td>
            <td>{m.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MisdemeanourList;