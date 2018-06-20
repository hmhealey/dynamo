import * as Types from 'client/scryfall/types';

export interface ReceivedCard {
    type: 'ReceivedCard',
    name?: string,
    card: Types.Card
}

export type Action = ReceivedCard;
