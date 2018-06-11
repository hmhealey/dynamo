import * as Types from './types';

const SCRYFALL_API = 'https://api.scryfall.com'

export class ScryfallClient {
    static instance = new ScryfallClient();

    static getInstance = () => {
        return ScryfallClient.instance;
    }

    getAllSets() {
        const url = '/sets';
        return this.fetch<List<Types.Set>>(url);
    }

    getSet(code: string) {
        const url = `/sets/${code}`;
        return this.fetch<Types.Set>(url);
    }

    getAllCards(page: number = 1) {
        const url = `/cards?page=${page}`;
        return this.fetch<List<Types.Card>>(url);
    }

    searchCards(query: string, page: number = 1, options?: {
        unique?: SearchUnique,
        order?: SearchUnique,
        direction?: SearchDirection
    }) {
        let url = `/cards/search?q=${encodeURIComponent(query)}+page=${page}`;

        if (options) {
            if (options.unique) {
                url += `+unique=${options.unique}`;
            }

            if (options.order) {
                url += `+order=${options.order}`;
            }

            if (options.direction) {
                url += `+dir=${options.direction}`;
            }
        }

        return this.fetch<List<Types.Card>>(url);
    }

    getCardByName(name: string, options ?: {
        fuzzy?: boolean,
        set?: string,
    }) {
        let url = '/cards/named';

        if (options && options.fuzzy) {
            url += `?fuzzy=${encodeURIComponent(name)}`;
        } else {
            url += `?exact=${encodeURIComponent(name)}`;
        }

        if (options && options.set) {
            url += `&set=${encodeURIComponent(options.set)}`;
        }

        return this.fetch<Types.Card>(url);
    }

    autocompleteCardNames(query: string) {
        const url = `/cards/autocomplete?q=${encodeURIComponent(query)}`;
        return this.fetch<Catalog<Types.Card>>(url);
    }

    getRandomCard() {
        const url = '/cards/random';
        return this.fetch<Types.Card>(url);
    }

    getCardByID(id: string) {
        const url = `/cards/${encodeURIComponent(id)}`;
        return this.fetch<Types.Card>(url);
    }

    async fetch<T>(url: string): Promise<Response<T>> {
        const response = await fetch(SCRYFALL_API + url);

        let data;
        try {
            data = await response.json();
        } catch {
            return {
                error: {
                    status: 0,
                    code: '',
                    details: 'Unable to deserialize json response'
                }
            };
        }

        if (!response.ok) {
            return {
                error: data
            };
        }

        return {
            data
        };
    }
}

export interface Catalog<T> {
    data: T[],
    total_items: number
};

export interface List<T> {
    data: T[],
    has_more: boolean,
    next_page: string,
    total_cards?: number
    // warnings: string[]
};

export type Response<T> = {
    data?: T,
    error?: Types.Error
};

export enum SearchUnique {
    Cards = 'cards',
    Art = 'art',
    Prints = 'prints'
};

export enum SearchOrder {
    Name = 'name',
    Set = 'set',
    Released = 'released',
    Rarity = 'rarity',
    Color = 'color',
    Usd = 'usd',
    Tix = 'tix',
    Eur = 'eur',
    Cmc = 'cmc',
    Power = 'power',
    Toughness = 'toughness',
    Edhrec = 'edhrec',
    Artist = 'artist'
};

export enum SearchDirection {
    Auto = 'auto',
    Ascending = 'asc',
    Descending = 'desc'
};

export default ScryfallClient;
