import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import HeroCard from "./HeroCard";
import * as mockData from "../../../mock/api-mock.json";

describe('The HeroCard component', function () {
    beforeEach(()=>
    {
        // @ts-ignore
        jest.spyOn(window, "fetch").mockResolvedValueOnce({
            json: jest.fn().mockResolvedValue(mockData.search),
        });
    })

    afterEach(()=>
    {
        jest.restoreAllMocks()
    })

    it('should render a card with some title', async() => {
        render(<HeroCard />);
        const titleElement = screen.getByText(/Star Wars Heroes/i);
        await waitFor(() => expect(titleElement).toBeInTheDocument());
    });

    it("should display display information about a character when the search button is pressed", async () => {
        render(
            <HeroCard />
        )

        // Add a text to the input
        const inputBox = screen.getByPlaceholderText(/Enter Hero here/i);
        fireEvent.change(inputBox, { target: { value: "Luke" } });

        // Press the search button
        const searchButton = screen.getByText("Search");
        fireEvent.click(searchButton);

        await waitFor(() => expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument());
    });

});

