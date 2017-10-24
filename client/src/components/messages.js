


  
import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {userMessages} from '../actions/index.js';
const center = {paddingLeft : '250px', paddingTop:'5%',color : 'white'};
const bg = {backgroundColor : '#ABAB25',
width: '55%',
borderStyle: 'inset',
color:'white',

};


class Messages extends Component {
     handleFormSubmit(formprops){
      alert('form submission in proces');
      console.log(this.props);
       this.props.userMessages(formprops);
       alert('form submission in processed'); 
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
        const { handleSubmit , fields : {emailTo, message, emailFrom}} = this.props;
        return(
            <div className = "formDiv" style={center}>
            {/* <img src="../../../style/lo.png" alt=""/> */}
            <div style={bg}><h2 style={{ textDecorationLine: 'underline' }}>New Message</h2></div>
            <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
             <h3>Compose</h3>
            <fieldset  className="form-group " >
           
                <label>Email To:</label>
                    <input  className="form-control" {...emailTo}/>
                    {emailTo.touched && emailTo.error && <div className="error">{emailTo.error}</div> }
                   
            </fieldset>
            <fieldset  className="form-group">
               <label>Message:</label>
              <input {...message} type = "text" className="form-control"/> 
              {message.touched && message.error && <div className="error">{message.error}</div> }
           </fieldset>
           <fieldset  className="form-group">
               <label>Your Email:</label>
              <input {...emailFrom} type = "email" className="form-control"/> 
              {emailFrom.touched && emailFrom.error && <div className="error">{emailFrom.error}</div> }
           </fieldset>
           
           {this.renderAlert()}
           <button action= "submit" className = "btn btn-primary">Send</button>
       
       </form>
       </div>
        )
    }
}

function validate(formProps){
   const errors= {};
  //  if(!formProps.name){
  //      errors.email = 'Please enter Your name';
  //  }
  //  if(!formProps.fType){
  //   errors.fType = 'Please enter a type of food';
  // }
  //  if(!formProps.expDate){
  //   errors.expDate = 'Please enter a expiry date';
  //  }
  //  if(!formProps.zip){
  //   errors.expDate = 'Please enter your zip code';
  //  }
  
  
   return errors;
}

function mapStateToProps(state){
    return{errorMessage:state.auth.error};
}
export default reduxForm(
    {
        form : 'messages',
        fields : ['emailTo','message','emailFrom'],
        validate
        
    },mapStateToProps, actions)(Messages);
