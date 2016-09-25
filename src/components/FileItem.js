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
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5
  },
  cover: {
    flex: 1,
    height: 150,
    resizeMode: 'contain'
  },
  info: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 20
  },
  name: {
    fontSize: 18
  },
  url: {
    fontSize: 18,
    fontWeight: 'bold'
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
        <Image style={styles.cover} source=/>
        {{/*
        <View style={styles.icon}>
          <Icon
              name="folder"
              size={50}
              color={'rgb(59,89,152)'}
          />
        </View>
        */}}
        <View style={styles.info}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.url}>{this.props.url}</Text>
        </View>
      </View>
    );
  }
}

export default FileItem;
