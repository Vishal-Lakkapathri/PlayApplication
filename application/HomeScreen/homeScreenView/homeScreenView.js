import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { incrementCounter, decrementCounter, resetCounter } from './counterState';
import Counter from '../counterView';
import styles from '../styles';

export default class HomeScreenView extends Component {
  constructor(props) {
    super(props);
    this.state = { counterValue: 0 };
  }

  handleIncrementCounter = () => {
    this.setState(incrementCounter);
  }

  handleDecrementCounter = () => {
    this.setState(decrementCounter);
  }

  handleResetCounter = () => {
    this.setState(resetCounter);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', marginBottom: 50 }}>
          <Counter
            counterValue={this.state.counterValue}
            resetCounter={this.handleResetCounter}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={this.handleIncrementCounter}>
            <Text>Increment Counter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleDecrementCounter}>
            <Text>Decrement Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
