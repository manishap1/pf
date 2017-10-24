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
  const bg = {backgroundColor : '#ABAB25',
  width: '90%',
  borderStyle: 'inset',
  color:'white',
  textAlign: 'center'
  
  
  };
  const center = {
    paddingLeft : '100px' ,
    paddingTop : '10px' ,
   
  }
class Feature extends Component{
    
   componentWillMount(){
       this.props.fetchMessage();
   }
    render(){
        return(
            <div  style={center}> 
            <div style={bg}><h1 style={{ textDecorationLine: 'underline' }}>About </h1></div>
            <div style={{ paddingTop : '20px'}}>
                <div style={{ display:'inline-block'}}>
                    row1 
                    <img src="../../style/a.jpg" alt=""/>
                </div>
                <div style={{ display:'inline-block'}}>
                     row2 
                     <img src="../../style/b.jpg" alt=""/>
                </div>
                <div style={{ display:'inline-block'}}>
                    row3
                    <img src="../../style/c.jpg" alt=""/>
                </div>
                <div style={{ display:'inline-block'}}>
                    row3
                    <img src="../../style/d.jpg" alt=""/>
                </div>
                </div>
                <div  style={{ paddingTop : '20px',textAlign :'center'}}> 
                 <p style = {{color:'white'}} >
                 The Austin food chain is a Waste food control application  to help to reduce waste of food in the local Austin area.<br/>
                 The app will attempt to help communities across Austin by connecting them individuals and families<br/>
                  in need of food assistance. <br/>
                </p>
                <h5 style = {{color:'white'}}>  Disclaimer:</h5>
                <p style = {{color:'white'}}>

The Austin Food Chain is committed to providing safe and nutritous food to all who join. Food safety is vital to our success and continues to be an important part of our mission. 

Allergen Disclaimer: The Austin Food Chain handles foods that may contain: peanuts, tree nuts, wheat,soy,eggs,fish,shellfish,milk, and/or sesame.

Recall Post Information: This data is pulled from FDA and USDA sources. Partner agencies will be contacted directly if we know any of these recalled items were ditributed by the Austin Food Chain.
       </p>
                </div>
               
            </div>
            //<div>{this.props.message}</div>
        );
    }
}

function mapStateToProps(state){
    return{message : state.auth.message}
}
export default connect(mapStateToProps,actions)(Feature);