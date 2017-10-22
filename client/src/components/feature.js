import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
const divStyle = {
    margin: '40px',
    border: '5px solid pink'
  };
  const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };
class Feature extends Component{
    
   componentWillMount(){
       this.props.fetchMessage();
   }
    render(){
        return(
            <div style={divStyle}>
            Austin Food Chain {"\n"}
            Beacouse Sharing is caring
            </div>
            //<div>{this.props.message}</div>
        );
    }
}

function mapStateToProps(state){
    return{message : state.auth.message}
}
export default connect(mapStateToProps,actions)(Feature);