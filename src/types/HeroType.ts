/**
 * Types used in Hero components
 */
export enum Gender {
    female = "female", male = "male", unknown = "unknown"
}

export type ErrorServer = {
    code?: number,
    message: string
}

export type HeroType = {
    "name"?: string,
    "height"?: string,
    "mass"?: string,
    "hair_color"?: string,
    "skin_color"?: string,
    "eye_color"?: string,
    "birth_year"?: string,
    "gender"?: Gender,
    "homeworld"?: string,
    "films"?: Array<string>,
    "species"?: [],
    "vehicles"?: Array<string>,
    "starships"?: Array<string>,
    "created"?: string,
    "edited"?: string,
    "url"?: string,
    error?: ErrorServer
}

