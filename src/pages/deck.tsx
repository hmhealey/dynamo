import React from 'react';

import DeckList from 'components/deck_list';
import PageLayout from 'components/page_layout';

export default class Deck extends React.PureComponent {
    render() {
        return (
            <PageLayout>
                <DeckList
                    name={'Omnidoor Thragfire'}
                    mainDeck={mainDeck}
                    sideboard={sideboard}
                />
            </PageLayout>
        );
    }
}

const mainDeck = `2 Glacial Fortress
3 Hallowed Fountain
4 Sunpetal Grove
4 Temple Garden
2 Overgrown Tomb
4 Hinterland Harbor
1 Steam Vents
1 Plains
1 Island
1 Forest
1 Alchemist's Refuge
1 Kessig Wolf Run
2 Fog
4 Farseek
3 Chromatic Lantern
4 Ranger's Path
4 Supreme Verdict
1 Door to Nothingness
2 Gilded Lotus
4 Increasing Ambition
1 Thragtusk
2 Terminus
2 Sphinx's Revelation
2 Temporal Mastery
1 Angel of Serenity
1 Nicol Bolas, Planeswalker
1 Griselbrand
1 Omniscience`;

const sideboard = `4 Centaur Healer
1 Thoughtflare
3 Thragtusk
1 Planar Cleansing
2 Terminus
1 Temporal Mastery
1 Worldfire
2 Sphinx's Revelation`;
