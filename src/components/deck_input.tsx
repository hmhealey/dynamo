import React from 'react';

import * as Types from 'client/scryfall/types';

import debounce from 'utils/debounce';

interface Props {
    getCardsIfNecessary: (cardNames: string[]) => Promise<void>
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value: string
}

export class DeckInput extends React.PureComponent<Props> {
    loading = false;

    getCards = debounce(() => {
        this.loading = true;

        const cardNames = this.props.value.split('\n').map((line) => {
            return line.trim();
        });

        return new Promise((resolve) => {
            this.props.getCardsIfNecessary(cardNames).then(() => {
                this.loading = false;

                resolve();
            });
        });
    }, 200)

    render() {
        return (
            <React.Fragment>
                <textarea
                    style={{
                        flex: 1,
                        resize: 'none'
                    }}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
                <button onClick={this.getCards}>{'ASdf'}</button>
            </React.Fragment>
        );
    }
}

import {connect} from 'react-redux';

import {getCardsIfNecessary} from 'actions/cards';

import {Dispatch} from 'types/redux';
import {StoreState} from 'types/store';

interface ContainerProps {
};

function mapStateToProps(state: StoreState, ownProps: ContainerProps) {
    return {};
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getCardsIfNecessary: (names: string[]) => dispatch(getCardsIfNecessary(names))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckInput);
