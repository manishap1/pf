import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';


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

class Signout extends Component {
    componentWillMount(){
        this.props.signoutUser();
    }
 

render(){
    return (

        <div >
        
            
            <div style={{ display:'inline-block'}}>
            <img src="../../../style/lo.png" alt=""/>
            </div>    
            
              <div style={{ display:'inline-block',color : 'white', paddingBottom : '50%', paddingLeft:'10%'}}>
                <h2> You are logged out <br/>
                 Thank you!
                </h2>
              </div>       
              
              
                        
         </div>    
       
    );
}
}
export default connect(null, actions)(Signout);