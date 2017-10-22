import axios from 'axios';

import {browserHistory} from 'react-router';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE

} from './types'

const ROOT_URL = 'http://localhost:3090'

export function signinUser({ email,password}){
    return function(dispatch){
  
// submit email and password to the server
axios.post(`${ROOT_URL}/signin`,{email,password})
.then(response =>{
    //if request is good
//-update state to indiacte user is authenticated
dispatch({type:AUTH_USER, payload: response.data.token});
//save the jwt token
localStorage.setItem('token',response.data.token);
//redirect tothe route '/feature'
browserHistory.push('/feature');
 })
.catch(()=>{
    //if request is bad..
//show an error to the user
 dispatch(authError('bad login info'));

 });
    }
}

export function signupUser({email,password}){
 return function(dispatch){
    
     console.log('Called by: ');
     console.trace();
      axios.post(`${ROOT_URL}/signup`,{email,password})
     .then(response => { 
       localStorage.setItem('token',response.data.token);
       dispatch({type : AUTH_USER, payload: response.data.token});       
       browserHistory.push('/feature');
    })
    .catch( (error) => dispatch(authError(error.response.data.error))); 
    // .catch(error => {
    //     dispatch(authError(error.response.data.error));
    //   });
    
 }
}

export function authError(error){
    return{
        type : AUTH_ERROR,
        payload : error
    };
}

export function signoutUser(){
    localStorage.removeItem('token');
    return { type : UNAUTH_USER};
}

export function fetchMessage(){
    return function(dispatch){
        axios.get(ROOT_URL,{
          headers : {authorization : localStorage.getItem('token')}  
        })
        .then(response => {
            // console.log(response);
            dispatch({
               type : FETCH_MESSAGE,
                payload : response.data.message
            })
        });
    }
}
export function userDonate({name,fType,expDate,note,zip}){
    console.log('got rquest for posting the form');

    return function(dispatch){
        console.log('posting donate to server ' + {name: name,fType: fType,expDate: expDate,note: note,zip: zip});
         axios.post(`${ROOT_URL}/donate`,
          {name: name,fType: fType,expDate: expDate,note: note,zip: zip},
    {headers : {authorization : localStorage.getItem('token')}})
        .then(response => { 
        //   dispatch({});
          localStorage.setItem('token',response.data);
          alert("Thank you for the donations");
          browserHistory.push('/feature');
       })
       .catch( (error) => dispatch(authError(error.response.data.error))); 
       // .catch(error => {
       //     dispatch(authError(error.response.data.error));
       //   });
       
    }
   }
   export function userMessages({emailTo,message,emailFrom}){
    console.log('got rquest for posting the form');

    return function(dispatch){
        console.log('posting messages to server ' + {emailTo: emailTo,message : message,emailFrom: emailFrom});
         axios.post(`${ROOT_URL}/messages`,
          {emailTo: emailTo,message : message,emailFrom: emailFrom},
    {headers : {authorization : localStorage.getItem('token')}})
        .then(response => { 
        //   dispatch({});
          localStorage.setItem('token',response.data);
          alert("Your message has been sent");
          browserHistory.push('/feature');
       })
       .catch( (error) => dispatch(authError(error.response.data.error))); 
       // .catch(error => {
       //     dispatch(authError(error.response.data.error));
       //   });
       
    }
   }

   