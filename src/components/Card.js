import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { poster, title, release_date, overview } = this.props

        return (
            <div>
                <h1>{title}</h1>
                <img src={poster} />
                <p>{release_date}</p>
                <p>{overview}</p>
            </div>
        );
    }
}

export default Card;