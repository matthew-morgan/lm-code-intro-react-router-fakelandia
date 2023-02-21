import { render, fireEvent } from '@testing-library/react';
import SubjectInput from './SubjectInput';

describe('SubjectInput', () => {
  it('should update value when input changes', () => {
    const onChange = jest.fn();
    const value = 'Test';
    const { getByLabelText } = render(
      <SubjectInput value={value} onChange={onChange} />
    );

    const input = getByLabelText('Subject:');
    fireEvent.change(input, { target: { value: 'New value' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('New value');
  });
});
