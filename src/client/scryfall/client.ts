import * as Types from './types';

export class ScryfallClient {
    static instance = new ScryfallClient();

    static getInstance = () => {
        return ScryfallClient.instance;
    }

    getCard(name: string, fuzzy: boolean) {
        const url = `https://api.scryfall.com/cards/named/?exact=${encodeURIComponent(name)}&fuzzy={Boolean(fuzzy)}`;

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

export default ScryfallClient;
