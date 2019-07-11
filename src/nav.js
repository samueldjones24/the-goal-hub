import React from 'react';
import FacebookLogin from 'react-facebook-login';

const NavBar = (props) => (
    <div className="nav-bar">
      
        
      {props.userId
      ? (
        <div>
          <button onClick={props.onLogout}>Log out</button>
        </div>
      ) : (
      <FacebookLogin
            appId={2279032468855290}
            autoLoad={true}
            callback={props.onLogin}
          >
      Sign in with Facebook
          </FacebookLogin>
      )}
  
      </div>
  
  
  );
  
  export default NavBar;
  