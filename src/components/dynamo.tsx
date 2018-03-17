import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import ScryfallClient from 'client/scryfall/client';
import * as Types from 'client/scryfall/types';

import CardImage from 'components/card_image';

type Props = {
}

type State = {
    card: Types.Card,
    value: string
}

export default class Dynamo extends React.PureComponent<Props, State> {
    // store = createStore();

    client = new ScryfallClient();

    constructor(props: Props) {
        super(props);

        this.state = {
            card: null,
            value: ''
        };
    }

    getCard = () => {
        this.client.getCard(this.state.value).then(({data}) => {
            this.setState({
                card: data
            });
        });
    };

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            value: (e.target as HTMLInputElement).value
        });
    };

    render() {
        let image;
        if (this.state.card) {
            image = <CardImage card={this.state.card} type='small'/>;
        }

        return (
            <div style={{display: 'flex', height: '100%'}}>
                <div style={{backgroundColor: 'red', display: 'flex', width: 300}}>
                    <textarea style={{flex: 1, resize: 'none'}}/>
                </div>
                <div style={{backgroundColor: 'blue', flex: 1}}>
                    <input onChange={this.handleChange} value={this.state.value}/>
                    <button onClick={this.getCard}>{'Clicky'}</button>
                    <div>{this.state.card ? JSON.stringify(this.state.card) : ''}</div>
                    {image}
                </div>
            </div>
        );

        // return (
        //     <BrowserRouter>
        //         <React.Fragment>
        //             <div>
        //                 <Link to='/page_one'>{'One'}</Link>
        //                 {' | '}
        //                 <Link to='/page_two'>{'Two'}</Link>
        //             </div>
        //             <div>
        //                 <Route path='/page_one' component={PageOne} />
        //                 <Route path='/page_two' component={PageTwo} />
        //             </div>
        //         </React.Fragment>
        //     </BrowserRouter>
        // );
    }
}

class PageOne extends React.PureComponent {
    render() {
        return (
            <div style={{backgroundColor: '#99ff99'}}>
                <h1>{'Page One'}</h1>
                <p>{'This is page one'}</p>
            </div>
        );
    }
}

class PageTwo extends React.PureComponent {
    render() {
        return (
            <div style={{backgroundColor: '#ff9999'}}>
                <h1>{'Page Two'}</h1>
                <p>{'This is page two'}</p>
            </div>
        );
    }
}
