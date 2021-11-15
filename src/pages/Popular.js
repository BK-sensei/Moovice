import React, { Component } from 'react';
import Card from '../components/Card';

class Popular extends Component {
    constructor() {
        super()

        // state initial
        this.state = {
            movies : []
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={74ff4d5b18f55c304a239fadf716fe2f}`)
        .then(response => response.json)
        .then(result => {
            this.setState({movies: result})
        })
    }

    render() {
        const { movies } = this.state

        return (
            <div>
                <h1>Popular</h1>

                {movies.map(movie => (
                    <Card 
                        poster={movie.poster}
                        title={movie.title}
                        release_date={movie.release_date}
                        overview={movie.overview}
                    />
                ))}
            </div>
        );
    }
}

export default Popular;