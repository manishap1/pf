import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
// const btn ={backgroundColor: 'black' };
const font = {fontFamily: 'Arizonia'};


class Header extends Component{
    renderLinks(){
        if(this.props.authenticated){
            //show a link to sign out
          return [
            <li>
            <Link className="nav-link" to="/feature">
                About
             </Link>
            </li>,
           <li className="nav-item">
            
           <Link className="nav-link" to="/donate">
                Make Donations
             </Link>
            </li> ,
             <li className="nav-item">
             <Link className="nav-link" to="/find">
                  Available Donations
               </Link>
              </li>,
               <li className="nav-item">
               <Link className="nav-link" to="/messages">
                    Messages
                 </Link>
                </li>,
                 <li className="nav-item">
                 <Link className="nav-link" to="/notify">
                      Notifications
                   </Link>
                  </li>,
                 <li className="nav-item">
                 <Link className="nav-link" to="/signout">
                      Sign Out
                   </Link>
                  </li>
          ] 
        } else {
            //show a link to sign in or sign up
           return [
                     <li className="nav-item" key={1}>
                       <Link className="nav-link" to="/signin" >
                        Sign in
                       </Link>
                     </li>,
                     <li className="nav-item" key={2}>
                       <Link className="nav-link" to="/signup">
                         Sign up
                      </Link>
                    </li>
           ]; 
        }
        
    }
    //
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-toggleable-md navbar-light nav bg-faded fluid">
                      
                       <Link to="/" className="navbar-brand" style={font}>AustinFoodChain</Link>
                       <div
                     className="collapse navbar-collapse"
                         id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                           {this.renderLinks()}
                         </ul>
                       </div>
                     </nav>
        );
    }
}

function mapStateToProps(state){
    return {
      authenticated: state.auth.authenticated
    };
}
export default connect(mapStateToProps)(Header);