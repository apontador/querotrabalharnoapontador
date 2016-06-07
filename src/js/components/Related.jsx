'use strict';

import React, { PropTypes } from 'react';

const Related = React.createClass({
    propTypes:{
        url:PropTypes.string,
        related:PropTypes.object  
    },
    render() {
        let { url, related } = this.props;
        return (
            <div className="col-sm-4 col-md-4">
                <div className="thumbnail">
                    <img width="100%" src={url} alt="Local Related" />
                    <div className="caption">
                        <smal>{related.description}</smal>
                    </div>
                </div>
            </div>
        );
    }
});

export default Related;