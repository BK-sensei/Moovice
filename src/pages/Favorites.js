import React, { Component } from 'react';
import Card from '../components/Card';

class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            movies : [],
            favIDs : this.getStorage()
        }

        //--- BINDING DES METHODES
        this.getMovie = this.getMovie.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    //--- METHODES

    // Méthode qui retourne notre array d’IDs sauvegardés
    getStorage(){
        let favoritesArray = localStorage.getItem("favorites")
        return favoritesArray = JSON.parse(favoritesArray) 
    }

    // Méthode qui récupèrera un film à travers l'API 
    getMovie(id){
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then (response => response.json())
        .then (result => {this.setState({ movies : [...this.state.movies, result]})})
    }

    componentDidMount(){
        const { favIDs } = this.state
        favIDs.forEach(id => (
            this.getMovie(JSON.stringify(id))
        ))
    }

    render() {
        const { movies } = this.state
        console.log(movies);

        return (
            <div>
                <h1 className="text-center fw-bold mb-5 mt-5">Favorites</h1>
                    <div className="container">
                    <div className="row">
                        {movies.map(movie => (
                            <Card 
                                key= {movie.title}
                                poster={movie.poster_path}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                overview={movie.overview}
                            />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default Favorites;