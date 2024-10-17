import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Phones } from './Phones'; // Importiere die Komponente
import { getTenCheapestPhones } from './api'; // Importiere die Mock-Methode

jest.mock('./api', () => ({
    getTenCheapestPhones: jest.fn()
}));
//Mock Daten
const mockPhones = [
    { id: 1, name: 'Phone 1', price: 300 },
    { id: 2, name: 'Phone 2', price: 250 }
];
describe('Phones Component', () => {
    it('renders the phones list correctly', async () => {
        // Mock den API-Aufruf, damit er unsere Beispiel-Telefone zurückgibt
        getTenCheapestPhones.mockImplementation((setPhones) => {
            setPhones(mockPhones);
        });
        render(<Phones />);
        // Überprüfe, ob der Titel angezeigt wird
        expect(screen.getByText('Smartphones')).toBeInTheDocument();
        // Warte auf die Render-Ergebnisse und prüfe, ob die Telefone korrekt angezeigt werden
        await waitFor(() => {
            expect(screen.getByText('Phone 1')).toBeInTheDocument();
            expect(screen.getByText('Phone 2')).toBeInTheDocument();
            expect(screen.getByText('300,00€')).toBeInTheDocument();
            expect(screen.getByText('250,00€')).toBeInTheDocument();
        });
        // Überprüfe, ob getTenCheapestPhones aufgerufen wurde
        expect(getTenCheapestPhones).toHaveBeenCalled();
    });
});