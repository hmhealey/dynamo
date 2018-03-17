// asdf

import * as Types from 'client/scryfall/types';

export interface ReceivedCard {
    type: 'ReceivedCard',
    card: Types.Card
}

export type Action = ReceivedCard;
