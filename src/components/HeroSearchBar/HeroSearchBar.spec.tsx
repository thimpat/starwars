import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import HeroSearchBar from "./HeroSearchBar";

describe("The SearchBar component", () => {
    it('should render an input with a description on what to do', async () => {
        render(<HeroSearchBar/>);
        const inputBox = screen.getByPlaceholderText(/Enter Hero here/i);
        await waitFor(() => expect(inputBox).toBeInTheDocument());
    });
})