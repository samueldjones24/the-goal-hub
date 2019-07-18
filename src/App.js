import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './categories';
import Goals from './goalsContainer';
import Home from './home';

import NavBar from './nav';

import './styles/App.css';


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

  handleLogout = () => {
    window.FB.logout();
    this.setState({ userId: null })
    console.log('logged out')
  };

 



render(){
  return (
    <div>
      <NavBar
          onLogin={this.handleLogin}
          userId={this.state.userId}
          onLogout={this.handleLogout}
        />
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home
        
         ></Home>} />    
        <Route exact path="/categories" component={Categories} />    
        <Route exact path="/categories/premier-league" component={() => <Goals
        
        ></Goals>} />    
      </Switch>
     </Router>
    </div>
)
}
};





export default App;
