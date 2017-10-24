import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const formDiv ={width: '50%', backgroundColor :'#040400' };
const center = {paddingLeft : '250px', paddingTop:'2%',color:'white'};
const bg = {backgroundColor : '#ABAB25',
            width: '45%',
            borderStyle: 'inset',
            color:'white',
            
            };

class Signin extends Component {
    handleFormSubmit({email,password}){
        console.log(email,password);
        this.props.signinUser({email,password});
    }

    renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className = " alert alert-danger">
                  <strong>Oops!</strong> { this.props.errorMessage}
                </div>
            );
        }
    }
    
    render(){
        //const {handleSubmit} = this.props
         const{ handleSubmit, fields :{email,password}} = this.props;
       return (
         
           <div className = "formDiv " style={center}>
            <img src="../../../style/lo.png" alt=""/ >
           <div style={bg}> <h1 style={{ textDecorationLine: 'underline' }}>LogIn</h1></div>
          
       <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))}>
           <fieldset  className="form-group">
               <label>Email:</label>
              
                   <input {...email} className="form-control"/> 
           </fieldset>
           <fieldset  className="form-group">
               <label>Password:</label>
              
              <input {...password} type = "password" className="form-control"/> 
           </fieldset>
           {this.renderAlert()}
           <button action="submit" className="btn btn-success">SignIn</button>
       
       </form>
       </div>
       
       );
    }
}
 function mapStateToProps(state){
     return { errorMessage : state.auth.error};
 }
 export default reduxForm({
    form : 'signin',
    fields : ['email','password']
 },mapStateToProps,actions)(Signin);
