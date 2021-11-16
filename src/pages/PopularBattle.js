import React, { Component } from 'react';

class PopularBattle extends Component {
    constructor() {
        super()

        //state initial
        this.state = {
            movies : [],
            currentBattle : 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(response => response.json())
        .then(result => {
            this.setState({movies: result.results})
        })
    }

    handleClick(e){
        const { currentBattle} = this.state
        this.setState({currentBattle: currentBattle +2})
    }

    render() {
        const { movies , currentBattle} = this.state

        let battleMovies = movies.filter( ( e , i) =>
         i === currentBattle || i === currentBattle + 1)

        return (
            <div>
                <h1 className="text-center fw-bold mb-5 mt-5">Popular Battle</h1>

                <div className="container">
                    <div className="row">

                        {battleMovies.map(movie => (
                            <div className="col-lg-6 col-md-6 mb-5" onClick={this.handleClick}>
                                <div className="card">
                                    <img src={(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`)} className="card-img-top" alt="Movie Poster" />
                                    <div className="card-body">
                                        <h4 className="card-title text-center fw-bold mb-2">{movie.title}</h4>
                                        <p className="card-text fst-italic text-center text-dark">Realised on the : {movie.release_date}</p>
                                        <p className="card-text"><span className="fw-bold">Description :</span> {movie.overview}</p>
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