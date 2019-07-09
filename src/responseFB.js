import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResponseFacebook = (props) => (
 <div>
      {props.userId
      ? (
        <div>
          <button onClick={props.onLogout}>Log out</button>
        </div>
      ) : (
 
  <FacebookLogin
    appId="2279032468855290"
    autoLoad={true}
    fields="name,email,picture"
    callback={ResponseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook" >
    Log in with Facebook
    </FacebookLogin>
      )}

  </div>
);

export default ResponseFacebook ;