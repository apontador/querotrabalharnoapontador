'use strict';

import React, { PropTypes } from 'react';
import { Media } from 'react-bootstrap';

const Comment = React.createClass({
    propTypes:{
        review:PropTypes.object
    },
    getInitialState(){
        return {
            textSize:100,
            incremental:900
        };
    },
    render() {
        let { review } = this.props;
        let { textSize, incremental } = this.state;
        return (
            <Media>
                <Media.Left align="top">
                    <img width={64} height={64} src={review.creation.author.photo} alt="Image"/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>
                        <a href={`http://www.apontador.com.br/profile/${review.creation.author.id}.html`}>{review.creation.author.name}</a>
                    </Media.Heading>
                    <p>
                        <span key={1} className="glyphicon glyphicon-star"></span>
                        <span key={2} className="glyphicon glyphicon-star"></span>
                        <span key={3} className="glyphicon glyphicon-star"></span>
                        <span key={4} className="glyphicon glyphicon-star"></span>
                        <span key={5} className="glyphicon glyphicon-star-empty"></span>
                        {' - '}
                        <small>16/05/2016</small>
                    </p>
                    <p className="review-content">
                        {review.text.slice(0, textSize)} 
                        <a href="javascript:;" onClick={() => (this.setState({textSize:textSize === 100 ?textSize + incremental : textSize - incremental}))}> { textSize === 100 ? 'Ver mais...' : 'Ver menos...' }</a>
                    </p>
                </Media.Body>
            </Media>
        );
    }
});

export default Comment;