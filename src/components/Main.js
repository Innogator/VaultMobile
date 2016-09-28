import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import HeaderBar from './HeaderBar';
import FileList from './FileList';

class Main extends Component {

  static propTypes = {
    onMenuPress: React.PropTypes.func.isRequired,
    onItemSelected: React.PropTypes.func.isRequired,
    activeTab: React.PropTypes.string,
    activeItem: React.PropTypes.string,
  }

  render() {
    return (
      <View>
        <HeaderBar onMenuPress={this.props.onMenuPress} />
        <FileList
          activeTab={this.props.activeTab}
          activeItem={this.props.activeItem}
          selectedId={this.props.activeItem}
          onItemSelected={this.props.onItemSelected} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7699dd',
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
})

export default Main;