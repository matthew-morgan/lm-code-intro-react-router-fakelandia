import React from 'react';
import { MisdemeanourKind, JustTalk } from '../types/misdemeanours.types';

type Reason = MisdemeanourKind | JustTalk;

type Props = {
  value: Reason;
  onChange: (value: Reason) => void;
};

const ReasonDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="reason">Reason:</label>
      <select id="reason" value={value} onChange={(e) => onChange(e.target.value as Reason)}>
        <option value="just-talk">Just talk</option>
        <option value="rudeness">Rudeness</option>
        <option value="vegetables">Vegetables</option>
        <option value="lift">Lift</option>
        <option value="united">United</option>
      </select>
    </div>
  );
};

export default ReasonDropdown;
