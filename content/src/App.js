import React, { Component } from 'react';
import './App.css';
import Homepage from './containers/homepage'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'
import QuizForm from './containers/quizForm'

import fire from './fire'

class App extends Component {

  state = {
    messages: []
  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100)
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Databse */
      let message = { text: snapshot.val(), id: snapshot.key }
      this.setState({ messages: [message].concat(this.state.messages)})
    })
  }
  addMessage(e){
    e.preventDefault()
    fire.database().ref('messages').push(this.inputEl.value)
    this.inputEl.value = '' // clear the input
  }
  render() {
    return (
      <div className="App">

        <Navbar id="navbar" collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Chime In</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <LinkContainer to='/quiz'>
                <NavItem>
                  Public Quizzes
                  </NavItem>
              </LinkContainer>

              <LinkContainer to='/example2'>
                <NavItem>
                  Private Quizzes
                </NavItem>
              </LinkContainer>

              <LinkContainer to='/example3'>
                <NavItem>
                  Another Thing?
                </NavItem>
              </LinkContainer>

            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="USERNAME HERE" id="basic-nav-dropdown">
                <MenuItem>My Private Quizzes</MenuItem>
                <MenuItem>My Public Quizzes</MenuItem>
                <MenuItem divider />
                <MenuItem>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        

        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path="/quiz" component={QuizForm} />
        </Switch>
      </div>
    );
  }
}

export default App;