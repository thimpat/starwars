import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import HeroInfo from "./HeroInfo";
import * as mockData from "../../../mock/api-mock.json"

describe("The HeroInfo component", () => {
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

    it('should render render some tabulated data', async() => {
        render(
            <HeroInfo />
        )
        const element = screen.getByText(/Gender/i);
        await waitFor(() => expect(element).toBeInTheDocument());
    });

})
