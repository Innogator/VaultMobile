import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
 fileItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5,
    height: 65
  },
  cover: {
    flex: 1,
    resizeMode: 'contain'
  },
  icon: {
    flex: 1,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  url: {
    flex: 1,
    fontSize: 18,
  }
});

class FileItem extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    url: React.PropTypes.string,
    icon: React.PropTypes.string,
  }

  render() {
    return (
      <View style={styles.fileItem}>
        <View style={styles.icon}>
          <Icon
              name="folder"
              size={50}
              color={'rgb(59,89,152)'}
          />
        </View>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.url}>{this.props.url}</Text>
      </View>
    );
  }
}

export default FileItem;
