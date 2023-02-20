import { render, screen } from '@testing-library/react';
import { MisdemeanourContext } from '../App';
import { Misdemeanour } from '../types/misdemeanours.types';
import MisdemeanourList from './MisdemeanourList';

describe('MisdemeanourList', () => {
  it('renders the correct data', () => {
    const mockMisdemeanours: Misdemeanour[] = [
      {
        citizenId: 1,
        misdemeanour: 'rudeness',
        date: '2022-02-18',
      },
      {
        citizenId: 2,
        misdemeanour: 'vegetables',
        date: '2022-02-17',
      },
    ];

    render(
      <MisdemeanourContext.Provider value={mockMisdemeanours}>
        <MisdemeanourList />
      </MisdemeanourContext.Provider>
    );

    const headers = screen.getAllByRole('columnheader');
    expect(headers[0]).toHaveTextContent('Citizen ID');
    expect(headers[1]).toHaveTextContent('Misdemeanour');
    expect(headers[2]).toHaveTextContent('Date');

    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Allrudenessvegetablesliftunited');

    expect(rows[2]).toHaveTextContent('1');
    expect(rows[2]).toHaveTextContent('rudeness');
    expect(rows[2]).toHaveTextContent('2022-02-18');

    expect(rows[3]).toHaveTextContent('2');
    expect(rows[3]).toHaveTextContent('vegetables');
    expect(rows[3]).toHaveTextContent('2022-02-17');
  });
});
