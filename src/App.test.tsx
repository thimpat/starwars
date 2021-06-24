import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import * as mockData from "../mock/api-mock.json";

describe("The application", () =>
{
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

  it('should render learn react link', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText(/Star Wars Heroes/i)).toBeInTheDocument());
  });
})
