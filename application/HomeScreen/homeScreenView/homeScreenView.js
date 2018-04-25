import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { incrementCounter, decrementCounter } from './counterState';
import Counter from '../counterView';

export default class HomeScreenView extends Component {
  constructor(props) {
    super(props);
    this.state = { counterValue: 0 };
  }

  handelIncrementCounter = () => {
    this.setState(incrementCounter);
  }

  decrementCounter = () => {
    this.setState(decrementCounter);
  }

  render() {
    return (
      <View>
        <View style={{ justifyContent: 'center', marginBottom: 50 }}>
          <Counter
            counterValue={this.state.counterValue}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={this.handelIncrementCounter}>
            <Text>Increment Counter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.decrementCounter}>
            <Text>Decrement Counter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
