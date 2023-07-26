import {Component} from "react";

class Student extends Component{

    render(){

        // const { title, plot, price, rating, stars, fav, cart } = this.state;
        console.log(this.props);

        return (
            <>
            <h1>Hello, {this.props.name}</h1>
            <p>You are a {this.props.sname}</p>
            </>
        )
    }
}

export default Student;