import React, { useState, useEffect, useContext } from 'react';
import SubjectInput from './SubjectInput';
import ReasonDropdown from './ReasonDropdown';
import DetailsTextarea from './DetailsTextarea';
import { MisdemeanourKind, JustTalk } from '../types/misdemeanours.types';
import { MisdemeanourContext } from '../App';
import './ConfessionForm.css'

type FormValues = {
  subject: string;
  reason: MisdemeanourKind | JustTalk;
  details: string;
};

type ResponseValues = {
  success: boolean;
  justTalked: boolean;
  message: string;
};

const ConfessionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    subject: '',
    reason: 'just-talk',
    details: '',
  });

  const misdemeanours = useContext(MisdemeanourContext);

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

      const data: ResponseValues = await response.json();

      console.log(data);

      if (!data.success) {
        setErrorMessage(data.message);
      }
      else {
        setSuccessMessage(data.message);
      }

      if (!data.justTalked) {
        misdemeanours.push({
          citizenId: Math.floor(Math.random() * 1000),
          misdemeanour: reason as MisdemeanourKind,
          date: new Date().toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
          }),
        });
      }

      if (!response.ok) {
        setErrorMessage(`Failed to submit form: ${response.status}`);
      }
      // Handle the server response
    } catch (error) {
      // Handle network errors and failed requests
      setErrorMessage("Network error");
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
      <p>
        It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.
      </p>
      <p>
        However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!
      </p>
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
          Confess
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </>
  );
};

export default ConfessionForm;
