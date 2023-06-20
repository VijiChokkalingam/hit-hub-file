// LifeCycleMethods: Initialization,Mounting,Unmounting,updating

import React, { Component } from 'react';
import PropTypes from 'prop-types';

 class LifeCycleMethods extends Component {
    constructor(props){
        super(props);
        console.log("This is constructor");
        this.state = {
            count:6
        };
    }
   componentWillMount(){
    console.log("This is WillMount")
   }

    componentDidMount(){
        console.log("This is DidMount")
    }

    shouldComponentUpdate(nextProps,nextState){
        const condition = nextState.count !==this.state.count
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log("This is componentWillUpdate");

    }
    componentDidUpdate(prevProps,nextState){
        console.log("This is componentDidUpdate");
    }


componentWillUnmount(){
    console.log("This is componentWillUnmount");
}



render() {
    console.log("This is Render",this.state.count)
    return(
        <div>
          <p>{this.state.count}</p>
          <button onClick = {()=>this.setState({count:this.state.count + 1})}>
            Increase Count
          </button>
        </div>
    );
}
}



export default LifeCycleMethods;