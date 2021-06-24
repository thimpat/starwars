import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSearchBar from "./HeroSearchBar";

test('renders learn react link', () => {
    render(<HeroSearchBar />);
    const linkElement = screen.getByPlaceholderText(/Enter Hero here/i);
    expect(linkElement).toBeInTheDocument();
});
