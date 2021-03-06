import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login'
import authenticate from './components/authenticate/authenticate'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      toggleLogin: false,
    }
  }

  login = e => {
      this.setState({
        toggleLogin: !this.state.toggleLogin
      })
  }

  logOut = () => {
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('loggedIn')
      this.setState({toggleLogin:false})
  }

  render(){
    return (
      <div className="App">
        <TopBar login={this.login} logOut={this.logOut}/>
        <Header />
        <Login loginState={this.state.toggleLogin} loginToggle={this.login}/>
        <ConditionalView />
      </div>
    ); 
  }
}

const ConditionalView = authenticate(Content)(Login)

export default App;
