import { MisdemeanourContext } from "../App";
import { useContext, useState } from 'react';
import { Misdemeanour, MISDEMEANOURS } from "../types/misdemeanours.types";
import './MisdemeanourList.css'

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
  const [selectedMisdemeanour, setSelectedMisdemeanour] = useState<string>("All");
  const picsumUrl = "https://picsum.photos/100/100?random=";

  const filteredMisdemeanours = selectedMisdemeanour !== "All"
    ? misdemeanours.filter(m => m.misdemeanour === selectedMisdemeanour)
    : misdemeanours;

  const misdemeanourOptions = ['All', ...MISDEMEANOURS];

  return (
    <table>
      <thead>
        <tr>
          <th>Citizen ID</th>
          <th>Misdemeanour</th>
          <th>Date</th>
          <th>Punishment</th>
        </tr>
        <tr>
          <th></th>
          <th>
            <select value={selectedMisdemeanour} onChange={(e) => setSelectedMisdemeanour(e.target.value)}>
              {misdemeanourOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredMisdemeanours.map(m => (
          <tr key={m.citizenId}>
            <td>{m.citizenId}</td>
            <td>{m.misdemeanour}</td>
            <td>{m.date}</td>
            <td><img src={picsumUrl + m.citizenId} alt="punishment" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default MisdemeanourList;