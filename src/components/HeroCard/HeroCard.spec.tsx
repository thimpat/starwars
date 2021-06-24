import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroCard from "./HeroCard";

test('renders learn react link', () => {
    render(<HeroCard />);
    const linkElement = screen.getByText(/Star Wars Heroes/i);
    expect(linkElement).toBeInTheDocument();
});
