import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../actions';
import { connect } from 'react-redux';
// import {userDonate} from '../actions/index.js';


class Donate extends Component {
     handleFormSubmit(formprops){
      alert('form submission in proces');
      console.log(this.props);
       this.props.userDonate(formprops);
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
        const { handleSubmit , fields : { name,fType,expDate,note,zip }} = this.props;
        return(
           
            <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
             <h3>Fill the form below for danations</h3>
            <fieldset  className="form-group " >
           
                <label>Name:</label>
                    <input  className="form-control" {...name}/>
                    {name.touched && name.error && <div className="error">{name.error}</div> }
                   
            </fieldset>
            <fieldset  className="form-group">
               <label>Food Type:</label>
              <input {...fType} type = "text" className="form-control"/> 
              {fType.touched && fType.error && <div className="error">{fType.error}</div> }
           </fieldset>
           <fieldset  className="form-group">
               <label>Expiry Date:</label>
              <input {...expDate} type = "date" className="form-control"/> 
              {expDate.touched && expDate.error && <div className="error">{expDate.error}</div> }
           </fieldset>
           <fieldset  className="form-group">
               <label>Note:</label>
              <input {...note} type = "text" className="form-control"/> 
              {note.touched && note.error && <div className="error">{note.error}</div> }
           </fieldset>
           <fieldset  className="form-group">
               <label>Zip code:</label>
              <input {...zip} type = "text" className="form-control"/> 
              {zip.touched && zip.error && <div className="error">{zip.error}</div> }
           </fieldset>
           {this.renderAlert()}
           <button action= "submit" className = "btn btn-primary">Send</button>
       
       </form>
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
        form : 'donate',
        fields : [ 'name','fType','expDate','note','zip'],
        validate
        
    },mapStateToProps, actions)(Donate);


    // import React, { Component } from 'react';
    // import request from 'superagent';
    
    // class Donate extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //         name:'',
    //         fType:'',
    //         expDate:'',
    //         note:'',
    //         zip:''
         
    //     };
    //     this.handleMessageInput = this.handleMessageInput.bind(this);
    //   }
    //   handleMessageInput(e) {
    //     this.setState({
    //          name: e.target.value ,
    //          fType: e.target.value,
    //          note: e.target.value,
    //          zip: e.target.value,
    //          expDate: e.target.value
           
    //         });
    //   }
    //   handleSubmitMessage() {
    //     console.log('starting to submit form');
    //     if (this.state.isFormFilledProfile) {
    //       console.log(' Form appears filled');
    //       const data = {
           
    //         name: this.state.name ,
    //         fType:this.state.fType,
    //         note: this.state.note,
    //         zip: this.state.zip,
    //         expDate: this.state.expDate
          
    //       };
    
    //       request
    //         .post('/donate')
    //         .send(data)
    //         .set('Accept', 'application/json')
    //         .end((err, res) => {
    //           if (err || !res.ok) {
    //             console.log('Oh no! err');
    //           } else {
    //             console.log('Success');
    //           }
    //         });
    //     }
    //   }
    //   render() {
    //     return (
    //       <div>
    //         <div>
    //           <form onSubmit={this.handleSubmitMessage}>
    //             <input
                 
    //               value={ this.state.name}
    //             />
    //             <input
                 
    //               value={ this.state.fType}
    //             />
    //             <input
                  
    //               value={ this.state.note}
    //             />
    //             <input
                
    //               value={ this.state.zip}
    //             />
    //             <input
                 
    //               value={ this.state.expDate }
    //             />
    //             <button type='Submit' value='Submit'>Submit</button>
    //           </form>
    //         </div>
    //       </div>
    //     );
    //   }
    // }
    
    // export default Donate;