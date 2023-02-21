import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const DetailsTextarea: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="details">Details:</label>
      <textarea id="details" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default DetailsTextarea;
