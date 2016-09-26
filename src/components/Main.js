import React, { Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

class ControlPanel extends Component {

  static contextTypes = {
    drawer: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>MAIN</Text>
        <Text>Testing</Text>
        <TouchableOpacity style={styles.button} onPress={this.context.drawer.open}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </ScrollView>
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