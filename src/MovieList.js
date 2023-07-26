import {Component} from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{

    render(){

        // const { title, plot, price, rating, stars, fav, cart } = this.state;

        return (
            <>
            <h1>Movie List</h1>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            </>
        )
    }
}

export default MovieList;