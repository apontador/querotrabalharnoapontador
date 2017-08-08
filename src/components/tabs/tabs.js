import React from 'react';
import {Container, List, Tab} from 'styled/components/tabs/tabs.styled';

export default class Tabs extends React.Component {

    constructor() {

        super();

        this.state = {
            tabs: []
        };
    }

    componentWillMount() {

        this.setState({
            tabs: this.props.tabs
        });
    }

    render() {

        return (
            <div>
            <Container>
                <List>
                    {this.state.tabs.map(tab => (
                        <Tab key={tab.name} {...tab}>
                            <a onClick={this.changeTab.bind(this, tab)}>{tab.name}</a>
                        </Tab>
                    ))}
                </List>
            </Container>
                {this.props.children}
            </div>
        );
    }

    changeTab(tab) {

        this.setState({
            tabs: [
                ...this.state.tabs.map(t => {

                    t.active = t.name === tab.name;

                    return t;
                })
            ],
        });

        // TODO: melhorar isso
        this.state.tabs.forEach(t => {
            document.getElementById(t.target).style.display = t.name === tab.name ? 'block' : 'none';
        });
    }
}