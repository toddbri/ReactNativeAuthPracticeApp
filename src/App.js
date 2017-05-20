import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { firebaseconfig } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseconfig);

  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
