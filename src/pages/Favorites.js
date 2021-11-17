import React, { Component } from 'react';
import Card from '../components/Card';

class Favorites extends Component {
    constructor() {
        super()

        this.state = {
            movies : [],
            favIDs : this.getStorage('favorites'),
            weeklyFavIds : this.getStorage('weeklyFavorites')
        }

        //--- BINDING DES METHODES
        this.getMovie = this.getMovie.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    //--- METHODES

    // On va parcourir le tableau état 'favIDs' et lancez la méthode 'getMovie' pour chaque élément
    componentDidMount(){
        const { favIDs, weeklyFavIds } = this.state

        favIDs.forEach(id => (
            this.getMovie(id)
        ))

        weeklyFavIds.forEach (id => (
            this.getMovie(id)
        ))

    }

    // Méthode qui retourne notre array d’IDs sauvegardés
    getStorage(key){
        let favoritesArray = localStorage.getItem(key) // je récupère ma valeur dans la clé 'favorite'
        favoritesArray = JSON.parse(favoritesArray)            // puisqu'elle est en string on la transforme en tableau

        if (favoritesArray === null){
            return []
        }
        else{
            return favoritesArray
        }
    }

    // Méthode qui récupèrera un film à travers l'API grâce à son ID
    getMovie(id){
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then (response => response.json())
        .then (result => 
            {this.setState({ movies : [...this.state.movies, result]})})
    }

    render() {
        const { movies, weeklyFavIds, favIDs } = this.state
        
        return (
            <>
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

            </>
        );
    }
}

export default Favorites;