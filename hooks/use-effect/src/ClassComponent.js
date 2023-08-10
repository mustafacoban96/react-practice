import React from "react";


class ClassComponent extends React.Component {

    //new
    state = {
        counter:0
    }
    
    //old 
    // constructor(){
    //     super();
    //     this.state = {
    //         counter:0
    //     }
    //func
    // this.increase = this.increase.bind(this)
    // }

    // make bind automtically with arrow func via ecma6 
    increase = () => {
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        console.log("class comp: ",this.state.counter)
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