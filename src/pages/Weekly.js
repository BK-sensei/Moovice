import React, { Component } from 'react'
import Card from '../components/Card'
import moment from 'moment'

class Weekly extends Component {
    constructor() {
        super()

        // state initial
        this.state = {
            movies : []
        }
    }

    componentDidMount(){
        fetch(`hhttp://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            this.setState({movies: result.results})
        })
        console.log(this.state.movies);
    }

    render() {
        console.log(this.state.movies);
        const { movies } = this.state

        return (
            <>
                <h1 className="text-center fw-bold mb-5 mt-5">Popular Movies</h1>
                
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

export default Weekly
