import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './categories';
import Goals from './goalsContainer';
import Home from './home';

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
    console.log('logged in')
  };

  handleLogOut = () => {
    window.FB.logout();
    this.setState({ userId: null })
  };

 



render(){
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home
        onLogin={this.handleLogin}
         ></Home>} />    
        <Route exact path="/categories" component={Categories} />    
        <Route exact path="/categories/premier-league" component={Goals} />    
      </Switch>
     </Router>
    </div>
)
}
};


export default App;
