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

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear any previous messages
    setErrorMessage('');
    setSuccessMessage('');

    const { subject, reason, details } = formValues;
    const formData = {
      subject,
      reason: reason === 'just-talk' ? reason : reason as MisdemeanourKind,
      details,
    };

    try {
      const response = await fetch('http://localhost:8080/api/confess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!data.success) {
        setErrorMessage(data.message);
      } else {
        setSuccessMessage('Form submitted successfully!');
      }

      if (!response.ok) {
        //throw new Error(`Failed to submit form: ${response.status}`);
        setErrorMessage(`Failed to submit form: ${response.status}`);
      }
      // Handle the server response
    } catch (error) {
      // Handle network errors and failed requests
      setErrorMessage("network error");
    }
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
    <>
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

      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </>
  );
};

export default ConfessionForm;
