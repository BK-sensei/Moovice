import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { poster, title, releaseDate, overview } = this.props

        return (
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card">
                    <img src={(`https://image.tmdb.org/t/p/w300/${poster}`)} className="card-img-top" alt="Movie Poster" />
                    <div className="card-body">
                        <h4 className="card-title text-center fw-bold mb-2">{title}</h4>
                        <p className="card-text fst-italic text-center text-dark">Realised on the : {releaseDate}</p>
                        <p className="card-text"><span className="fw-bold">Description :</span> {overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;