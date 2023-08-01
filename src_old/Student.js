import {Component} from "react";


// using  class based component with props
// class Student extends Component{

//     render(){

//         // const { title, plot, price, rating, stars, fav, cart } = this.state;
//         console.log(this.props);
//         const {name, sname} = this.props;
//         return (
//             <>
//             <h1>Hello, {name}</h1>
//             <p>You are a {sname}</p>
//             </>
//         )
//     }
// }


// using the function based component with props

function Student(props){
    const {name, sname} = this.props;
    return(
        <>
            <h1>Hello, {name}</h1>
            <p>You are a {sname}</p>

        </>
    )
}

export default Student;