/**
 * Handle request to Star Wars API server
 */
import {HeroType} from "../../types/HeroType";
import * as CONSTANTS from "../../constants/demo.json"

/**
 * Return information related to a single Star Wars character
 * @param name
 */
export const requestCharacterInfo = async (name = ""): Promise<HeroType> =>
{
    try {
        if (!name) {
            return {error: {message: "Request empty"}};
        }

        const search = encodeURI(name)
        const url = `${CONSTANTS.BASE_API}/people/?search=${search}`

        const response = await fetch(url);

        if (!response) {
            return {error: {message: "No response from server"}};
        }

        const json = await response.json();
        if (!json || !json.results || !json.results.length)
        {
            return {error: {message: "Query has returned no result"}};
        }

        // Return only the first result
        return json.results[0]
    } catch (e) {
        console.error(e);
    }

    return {error: {message: "Unexpected error"}};
}