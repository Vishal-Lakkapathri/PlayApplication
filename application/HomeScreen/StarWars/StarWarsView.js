import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { handleStarWarsClick } from '../action/counterActions';
import ListItem from './ListItem';

import styles from './styles';

type Props = {
  handleStarWarsClick: () => any,
  starWarsCharacters: Object,
}

class StarWarsView extends Component<Props> {
  onStarWarsClicked = () => {
    this.props.handleStarWarsClick();
  };
  onSelectedCharacter = item => console.log('onSelectedCharacter-->', item);
  render() {
    return (
      <View style={styles.content}>
        <TouchableOpacity
          onPress={this.onStarWarsClicked}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={styles.header}>Get StartWars Characters</Text>
        </TouchableOpacity>
        <FlatList
          data={this.props.starWarsCharacters}
          renderItem={item => (
            <TouchableOpacity
              style={{ alignItems: 'flex-start' }}
            // onPress={onSelectedCharacter(item.name)}
              onPress={() => this.onSelectedCharacter(item.item)}
            >
              <Text style={styles.listItems}>{item.item.name}</Text>
            </TouchableOpacity>)}
          // onPressItem={(item) => this.onSelectedCharacter(item)}
        />
      </View>
    );
  }
}

const mapDisatchToProps = {
  handleStarWarsClick,
};

const mapStateToProps = state => ({
  // counter: state.counter,
  starWarsCharacters: state.starWarsCharacters,
});

export default connect(mapStateToProps, mapDisatchToProps)(StarWarsView);
