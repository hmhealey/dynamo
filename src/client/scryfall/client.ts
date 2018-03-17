import * as Types from './types';

export default class ScryfallClient {
    getCard(name: string) {
        const url = `https://api.scryfall.com/cards/named/?exact=${encodeURIComponent(name)}`;

        return this.fetch<Types.Card>(url);
    }

    async fetch<T>(url: string): Promise<Response<T>> {
        const response = await fetch(url);

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

export type Response<T> = {
    data?: T,
    error?: Types.Error
};
