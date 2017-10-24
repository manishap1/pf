import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
const center = {paddingLeft : '250px', paddingTop:'2%',color : 'white'};
const bg = {backgroundColor : '#ABAB25',
width: '45%',
borderStyle: 'inset',
color:'white',

};


class Signup extends Component {
    handleFormSubmit(formprops){
        console.log('Signup is called');
       //call action creater to sign up
       console.log(this.props);
       this.props.signupUser(formprops); 
    }

    renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className="alert alert-danger">
                <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }
    render(){
        const { handleSubmit , fields : { email,password,passwordConfirm}} = this.props;
        return(
            <div className = "formDiv" style={center}>
             {/* <img src="../../../style/lo.png" alt=""/> */}
             <div style={bg}><h1 style={{ textDecorationLine: 'underline' }}>Sign Up</h1></div>
            <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
           
            <fieldset  className="form-group " >
           
                <label>Email:</label>
                    <input  className="form-control" {...email}/>
                    {email.touched && email.error && <div className="error">{email.error}</div> }
                   
            </fieldset>
            <fieldset  className="form-group">
               <label>Password:</label>
              <input {...password} type = "password" className="form-control"/> 
              {password.touched && password.error && <div className="error">{password.error}</div> }
           </fieldset>
           <fieldset  className="form-group">
               <label>Confirm Password:</label>
              <input {...passwordConfirm} type = "password" className="form-control"/> 
              {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div> }
           </fieldset>
           {this.renderAlert()}
           <button action= "submit" className = "btn btn-warning">Sign Up</button>
       
       </form>
       </div>
        )
    }
}

function validate(formProps){
   const errors= {};
   if(!formProps.email){
       errors.email = 'Please enter an email';
   }
   if(!formProps.password){
    errors.password = 'Please enter a password';
  }
   if(!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please enter a password confirmation';
   }
   if(formProps.password !== formProps.passwordConfirm){
     errors.password = ' Passwords must match' ;
   }
   return errors;
}

function mapStateToProps(state){
    return{errorMessage:state.auth.error};
}
export default reduxForm(
    {
        form : 'signup',
        fields : ['email','password','passwordConfirm'],
        validate 
    },mapStateToProps,actions)(Signup);