export enum Color {
    White = 'W',
    Blue = 'U',
    Black = 'B',
    Red = 'R',
    Green = 'G'
};

export interface Card {
    id: string,
    oracle_id: string,

    name: string,
    cmc: number,
    type_line: string,
    colors: Color[],

    image_uris: {
        [type: string]: string
    }
};

export interface Error {
    status: number,
    code: string,
    details: string,
    type?: string,
    warnings?: string[]
};
