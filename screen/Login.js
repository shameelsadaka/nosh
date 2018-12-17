import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LoginScreen extends React.Component {

    constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text>LoginScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AACCDD',
        alignItems: 'center',
        justifyContent: 'center',

    },
});