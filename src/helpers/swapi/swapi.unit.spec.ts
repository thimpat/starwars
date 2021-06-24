/**
 * Unit Tests
 */
import {requestCharacterInfo} from "./swapi";

describe("The Star Wars helper", () => {
    beforeAll(() => {
        jest.spyOn(console, "error").mockImplementation(jest.fn());
        jest.spyOn(window, "fetch");
    });

     describe("#requestCharacterInfo", () => {
        it(`should invoke the swapi server`, async () => {
            const name = "Luke Skywalker"
            const info = await requestCharacterInfo(name);
            expect(fetch).toHaveBeenCalledWith(
                "https://swapi.dev/api/people/?search=Luke%20Skywalker"
            );
        });

        it ("should return an error when no character is given", async () =>
        {
            const name = ""
            const info = await requestCharacterInfo(name);
            expect(info.error).toBeTruthy()
        })

        it ("should return an error when an invalid character is given", async () =>
        {
            const name = "Robocop"
            const info = await requestCharacterInfo(name);
            expect(info.error).toBeTruthy()
        })

    })

})