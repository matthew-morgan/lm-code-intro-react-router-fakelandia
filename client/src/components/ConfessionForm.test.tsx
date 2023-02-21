import { render, fireEvent } from '@testing-library/react';
import ConfessionForm from './ConfessionForm';

describe('ConfessionForm', () => {
    it('should update form values when inputs change', () => {
        const { getByLabelText } = render(<ConfessionForm />);
        const subjectInput = getByLabelText('Subject:');
        const reasonSelect = getByLabelText('Reason:');
        const detailsTextarea = getByLabelText('Details:');

        fireEvent.change(subjectInput, { target: { value: 'Test subject' } });
        fireEvent.change(reasonSelect, { target: { value: 'lift' } });
        fireEvent.change(detailsTextarea, { target: { value: 'Test details' } });

        expect(subjectInput).toHaveValue('Test subject');
        expect(reasonSelect).toHaveValue('lift');
        expect(detailsTextarea).toHaveValue('Test details');
    });

    it('should enable submit button when form is valid', () => {
        const { getByLabelText, getByRole } = render(<ConfessionForm />);
        const subjectInput = getByLabelText('Subject:');
        const detailsTextarea = getByLabelText('Details:');
        const submitButton = getByRole('button', { name: 'Submit' });

        fireEvent.change(subjectInput, { target: { value: 'Test subject' } });
        fireEvent.change(detailsTextarea, { target: { value: 'Test details' } });

        expect(submitButton).toBeEnabled();
    });

    it('should disable submit button when form is invalid', () => {
        const { getByLabelText, getByRole } = render(<ConfessionForm />);
        const subjectInput = getByLabelText('Subject:');
        const detailsTextarea = getByLabelText('Details:');
        const submitButton = getByRole('button', { name: 'Submit' });

        fireEvent.change(subjectInput, { target: { value: '' } });
        fireEvent.change(detailsTextarea, { target: { value: '' } });

        expect(submitButton).toBeDisabled();
    });
});
