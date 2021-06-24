import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroInfo from "./HeroInfo";

test('renders learn react link', () => {
    render(<HeroInfo />);
    const linkElement = screen.getByText(/Gender/i);
    expect(linkElement).toBeInTheDocument();
});
