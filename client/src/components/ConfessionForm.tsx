import React, { useState, useEffect } from 'react';
import SubjectInput from './SubjectInput';
import ReasonDropdown from './ReasonDropdown';
import DetailsTextarea from './DetailsTextarea';
import { MisdemeanourKind, JustTalk } from '../types/misdemeanours.types';

type FormValues = {
  subject: string;
  reason: MisdemeanourKind | JustTalk;
  details: string;
};

const ConfessionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    subject: '',
    reason: 'just-talk',
    details: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data
  };

  const handleInputChange = (name: string, value: string | MisdemeanourKind) => {
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    // Check if all form inputs are valid
    const isSubjectValid = formValues.subject.length > 0;
    const isDetailsValid = formValues.details.length > 10;

    setIsFormValid(isSubjectValid && isDetailsValid);
  }, [formValues]);


  return (
    <form onSubmit={handleSubmit}>
      <SubjectInput
        value={formValues.subject}
        onChange={(value) => handleInputChange('subject', value)}
      />
      <ReasonDropdown
        value={formValues.reason}
        onChange={(value) => handleInputChange('reason', value)}
      />
      <DetailsTextarea
        value={formValues.details}
        onChange={(value) => handleInputChange('details', value)}
      />
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default ConfessionForm;
