'use strict';

import React, { PropTypes } from 'react';
import Reflux from 'reflux';
import { Row, PageHeader, Pager, PageItem } from 'react-bootstrap';
import Related from './Related';
import Addresses from '../stores/Addresses';
import Loading from './common/Loading';

const RelatedList = React.createClass({
    propTypes: {
        place: PropTypes.object
    },
    mixins:[
        Reflux.listenTo(Addresses, 'onAddresses')
    ],
    getInitialState(){
        return {
            data:{}
        };
    },
    componentDidMount() {
        let { place } = this.props;
        Addresses.getAddresses([ `q=${place.address.street.split(' ').join('+')}` ]);
    },
    onAddresses(data){
        this.setState({data});
    },    
    render() {
        let { addressResults } = this.state.data;
        let html;
        html = addressResults ? addressResults.addresses.map((current, index) => (<Related key={index} related={current} url={`//lorempixel.com/150/150/city/${index}`} />)) : <Loading />;
        return (
            <section>
                <Row>
                    <PageHeader>Locais relacionados</PageHeader>
                </Row>
                <Row>
                    {html}
                </Row>
                <Row>
                    <Pager>
                        <PageItem href="#">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </PageItem>
                        { addressResults? addressResults.header.start + 1 : 1}
                        <PageItem href="#">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </PageItem>
                    </Pager>
                    <Pager>
                        <PageItem href="#" pullRight>
                            Ir para todos
                        </PageItem>
                    </Pager>
                </Row>
            </section>
        );
    }
});

export default RelatedList;