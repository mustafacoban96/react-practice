import React from "react";


class ClassComponent extends React.Component {

    //new
    state = {
        counter:0,
        timer: 0
    }


    // it works with a once load of component.
    // componentDidMount() {
    //     console.log('mount works')
    // }
    //it works when component is refreshed.
    // componentDidUpdate() {
    //     console.log("state is updated and component re-render")
    // }


    // componentDidMount(){
    //     this.myTimer = setInterval(() =>{
    //         this.setState({timer: this.state.timer +1});
    //     },1000)
    // }
    // componentDidUpdate() {
    //     console.log("Timer: ", this.state.timer);
    // }

    // componentWillUnmount(){
    //     clearInterval(this.timer)
    // }
    





    
    

    // make bind automtically with arrow func via ecma6 
    increase = () => {
        this.setState({counter: this.state.counter + 1})
    }
    render() {
       
        return (

            <div className="box">
                <h2>ClassComponent</h2>
                <p>Class Counter: {this.state.counter}</p>
                <button onClick={() => this.increase()}>+1</button>
            </div>
        );
    }
}


export default ClassComponent;