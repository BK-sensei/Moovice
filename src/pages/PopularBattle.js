import React, { Component } from 'react';


class PopularBattle extends Component {
    constructor() {
        super()

        //state initial
        this.state = {
            movies : [],
            currentBattle : 0,
        }

        // Binding fonction
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(response => response.json())
        .then(result => {
            this.setState({movies: result.results})
        })
    }

    handleClick(id){
        const { currentBattle } = this.state
        this.setState({currentBattle: currentBattle +2})

        // On va créer une variable où on va stocker les id des films choisis
        // On va d'abord voir si elle contient un ID
        let favoritesArray = localStorage.getItem("favorites")

        // Pour cela on créer une condition pour décider quoi faire si l'id est là
        if (!favoritesArray){                                                                 // si l'ID n'est pas là, on le créé 
            favoritesArray = localStorage.setItem("favorites", JSON.stringify([id]))           // ici l'ID entouré de [] est une string grâce au 'stringify' | on passe de [4532879] à "[4532879]"
        } else {                                                                               // si il est déjà là, je veux modifier la valeur de la clé 'favorites'    
            favoritesArray = JSON.parse(favoritesArray)                                        // grâce au 'parse' je transforme la variable 'favoritesArray' en tableau
            favoritesArray = [...favoritesArray, id]                                           // ensuite on pousse chaque ID choisi dans le tableau créé juste avant
            favoritesArray = localStorage.setItem("favorites", JSON.stringify(favoritesArray)) // pour finir on transforme la variable qui est un tableau 'favoritesArray' 
        }                                                                                      // à nouveau en string pour stocker les ID des films choisis dans le localstorage

    }

    render() {
        const { movies , currentBattle} = this.state
        
        let battleMovies = movies.filter( ( e , i ) =>
        i === currentBattle || i === currentBattle + 1)

        return (
            <div>
                <h1 className="text-center fw-bold mb-5 mt-5">Popular Battle</h1>

                <div className="container">
                    <div className="row d-flex justify-content-center">

                        {battleMovies.map(movie => (
                            <div className="col-lg-4 col-md-6 mb-5" onClick={() => this.handleClick(movie.id)}>
                                <div className="card">
                                    <img src={(`https://image.tmdb.org/t/p/w300/${movie.poster_path}`)} className="card-img-top" alt="Movie Poster" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center fw-bold mb-2">{movie.title}</h5>
                                        <p className="card-text fst-italic text-center text-dark">Realised on the : {movie.release_date}</p>
                                        <p className="card-text"><span className="fw-bold">Description :</span> {movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Conditions lorsque l'on va vu tous les films */}
                        {currentBattle === 20 && 
                            <h2 className="text-center mt-5">You have seen all the movies !</h2>
                        }
                    </div>
                </div>

            </div>
        );
    }
}

export default PopularBattle;