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

class ControlPanel extends Component {
  constructor() {
    super();

    this.state = {
      // TODO: temporarily select the root folder as default
      currentFolder: 'fa2734a0817c11e6ac0f34e6d714f88c',
    }
  }

  static propTypes = {
    onMenuPress: React.PropTypes.func.isRequired,
    onItemPress: React.PropTypes.func.isRequired,
  }

  fetchFileList(id) {

  }

  render() {
    return (
      <View>
        <HeaderBar onMenuPress={this.props.onMenuPress} />
        <FileList selectedId={this.state.currentFolder} />
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

export default ControlPanel;