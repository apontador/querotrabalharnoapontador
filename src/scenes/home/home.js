import React from 'react';
import Info from 'components/info/info';

export default class Home extends React.Component {

    render() {

        return (
            <main>
                <Info/>
                <div id="modalContainer"></div>
            </main>
        );
    }
}