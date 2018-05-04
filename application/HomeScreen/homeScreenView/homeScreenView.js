import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter, resetCounter } from '../action/counterActions';
import Counter from '../counterView';
import styles from '../styles';

type Props = {
  +incrementCounter: () => any,
  +decrementCounter: () => any,
  +resetCounter: () => any,
  counter: number,
}

class HomeScreenView extends Component <Props> {
  handleIncrementCounter = () => {
    this.props.incrementCounter();
  }

  handleDecrementCounter = () => {
    this.props.decrementCounter();
  }

  handleResetCounter = () => {
    this.props.resetCounter();
  }

  render() {
    const { counter } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', marginBottom: 50 }}>
          <Counter
            counterValue={counter}
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

const mapDisatchToProps = {
  incrementCounter,
  decrementCounter,
  resetCounter,
};

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(mapStateToProps, mapDisatchToProps)(HomeScreenView);
