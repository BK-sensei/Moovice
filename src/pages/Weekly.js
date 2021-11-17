import React, { Component } from 'react'
import Card from '../components/Card'
import moment from 'moment'

class Weekly extends Component {
    constructor() {
        super()

        // state initial
        this.state = {
            movies : [],
            today : moment().format("YYYY-MM-DD"),
            lastWeek : moment().subtract(7, 'd').format("YYYY-MM-DD")
        }
    }

    componentDidMount(){
        const { today, lastWeek } = this.state
        
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(response => response.json())
        .then(result => {
            this.setState({movies: result.results})
        })
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
