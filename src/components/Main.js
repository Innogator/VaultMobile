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

  static contextTypes = {
    drawer: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    onMenuPress: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <View>
        <HeaderBar onMenuPress={this.props.onMenuPress} />
        <FileList />
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