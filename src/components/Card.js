import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { poster, title, releaseDate, overview } = this.props

        return (
            <div className="col-lg-3 col-md-6 mb-5">
                <div class="card">
                    <img src={(`https://image.tmdb.org/t/p/w300/${poster}`)} class="card-img-top" alt="Movie Poster" />
                    <div class="card-body">
                        <h4 class="card-title text-center fw-bold mb-2">{title}</h4>
                        <p class="card-text fst-italic text-center text-dark">Realised on the : {releaseDate}</p>
                        <p class="card-text"><span className="fw-bold">Description :</span> {overview}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;