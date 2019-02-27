import React, { Component } from 'react'
import FeedItem from './FeedItem';

export default class Feed extends Component {
    render() {
        return (
            <div className="justify-content-center aligh-items-center">
                <FeedItem contacts={this.props.contacts} />
            </div>
        )
    }
}
