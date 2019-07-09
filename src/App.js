import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './categories';
import Goals from './goalsContainer';
import Home from './home';
import ResponseFacebook from './responseFB';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    }
  }

  handleLogin = (response) => {
    this.setState({ userId: response.userID })
  };

  handleLogOut = () => {
    window.FB.logout();
    this.setState({ userId: null })
  };



render(){
  return (
    <div>
         <ResponseFacebook
          onLogin={this.handleLogin}
          userId={this.state.userId}
          onLogout={this.handleLogout}
        />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />    
        <Route exact path="/categories" component={Categories} />    
        <Route exact path="/categories/premier-league" component={Goals} />    
      </Switch>
     </Router>
    </div>
)
}
};


export default App;
