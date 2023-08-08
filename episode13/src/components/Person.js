import PropTypes from 'prop-types';


export const Person = (props) =>{

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>Age: {props.age}</h3>
            <h3>The person is {props.isMarried ? "married" : "not married"}</h3>
            {props.friends.map((friend,index) => <p key={index}>{friend}</p>)}
        </div>
    )
}


Person.propTypes  = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string)
}






