import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter, resetCounter } from '../action/counterActions';
import Counter from '../counterView';
import CounterButtons from '../counterButtons';
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
        <Counter
          counterValue={counter}
          resetCounter={this.handleResetCounter}
        />
        <CounterButtons
          incrementCounter={this.handleIncrementCounter}
          decrementCounter={this.handleDecrementCounter}
        />
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
