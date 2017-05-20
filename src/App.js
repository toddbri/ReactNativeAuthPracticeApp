import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { firebaseconfig } from './components/common/config';
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    console.log('firebaseconfig: ', firebaseconfig);
    firebase.initializeApp(firebaseconfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
