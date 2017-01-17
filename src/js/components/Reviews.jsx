'use strict';

import React, { PropTypes } from 'react';
import reviews from '../stores/Reviews';
import { PageHeader, Row, PageItem, Pager } from 'react-bootstrap';
import Comment from './Comment';
import Loading from './common/Loading';

const Reviews = React.createClass({
    propTypes: {
        place: PropTypes.object
    },
    mixins: [
        Reflux.listenTo(reviews, 'onReviews')
    ],
    getInitialState() {
        return {
            data: {}
        };
    },
    componentDidMount() {
        let { place } = this.props;
        reviews.getReviews(place.id);
    },
    onReviews(data) {
        this.setState({ data });
    },
    render() {
        let { reviewResults } = this.state.data;
        let html;
        html = reviewResults ? reviewResults.reviews.map(current => (<Comment key={current.id}  review={current} />)) : <Loading />;
        return (
            <section>
                <Row>
                    <PageHeader>Reviews</PageHeader>
                </Row>
                <Row>
                    {html}
                </Row>
                <Row>
                    <Pager>
                        <PageItem href="#">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </PageItem>
                        { reviewResults ? reviewResults.header.start + 1 : 1 }
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

export default Reviews;