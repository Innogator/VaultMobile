import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HeaderBar extends Component {
  static propTypes = {
    onMenuPress: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <Icon.Button
                onPress={this.props.onMenuPress}
                name="menu"
                size={30}
                color={'white'}
                backgroundColor={'rgb(59,89,152)'}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoLabel}>Duck Box</Text>
        </View>
        <View style={styles.right}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  info: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoLabel: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(59,89,152)',
    height: 50,
  },
});

export default HeaderBar;