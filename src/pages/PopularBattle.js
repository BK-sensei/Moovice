import React, { Component } from 'react';
import Card from '../components/Card';

class PopularBattle extends Component {
    constructor() {
        super()

        //state initial
        this.state = {
            movies : [],
            currentBattle : 0
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(response => response.json())
        .then(result => {
            this.setState({movies: result.results})
        })
    }

    render() {
        const { movies , currentBattle} = this.state

        let battleMovies = movies.filter( ( e , i) =>
         i === currentBattle || i === currentBattle + 1)
        console.log(battleMovies);

        return (
            <div>
                <h1 className="text-center fw-bold mb-5 mt-5">Popular Battle</h1>

                <div className="container">
                    <div className="row">
                        {battleMovies.map(movie => (
                            
                            <div className="col-lg-6 col-md-6 mb-5">
                                <div class="card">
                                    <img src={(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`)} class="card-img-top" alt="Movie Poster" />
                                    <div class="card-body">
                                        <h4 class="card-title text-center fw-bold mb-2">{movie.title}</h4>
                                        <p class="card-text fst-italic text-center text-dark">Realised on the : {movie.release_date}</p>
                                        <p class="card-text"><span className="fw-bold">Description :</span> {movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default PopularBattle;