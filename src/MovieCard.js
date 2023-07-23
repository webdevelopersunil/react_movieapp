import {Component} from "react";

class MovieCard extends Component{

    constructor(){
        super();
        this.state = {
            title : "The Avengers",
            plot :  "Super naturalpower shown in this movie",
            price : 199,
            rating : 8.9,
            stars : 0
        }
    }

    addStars = () => {

        this.setState({
            stars: this.state.stars += .5
        });
        // this.state.stars += .5;
        // console.log("this: ", this.state.stars);
    }

    render(){

        const { title, plot, price, rating, stars } = this.state;

        return (
            <div className="main" >
                <div className="movie-card" >

                    <div className="left" > 
                        <img alt="Poster" src="data:image/jpeg;base64,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" />
                    </div>

                    <div className="right" >
                        <div className="title" > {this.state.title} </div>
                        <div className="plo" > {plot} </div>
                        <div className="price" > Rs. {price} </div>

                        <div className="footer" >
                            <div className="rating" > {rating} </div>
                            <div className="star-dis" >
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                <img onClick={this.addStars} className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" />
                                <span className="starCount" >{stars}</span>
                            </div>
                            <button className="favourite-btn" >Favourite</button>
                            <button className="cart-btn" >Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;