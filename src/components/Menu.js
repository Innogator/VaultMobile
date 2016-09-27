import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Menu extends Component {
  constructor() {
    super();

    // TODO: move this out into a separate file
    this.state = {
      activeTab: 1,
      menuItems: [
        { name: 'Firm', id: 'firm', icon: 'location-city' },
        { name: 'Team', id: 'firm', icon: 'people' },
        { name: 'Client', id: 'firm', icon: 'person' },
        { name: 'User', id: 'firm', icon: 'person' },
        { name: 'Notifications', id: 'notifications', icon: 'notifications' },
      ]
    }
  }

  createMenu = (item, i) => (
    <TouchableOpacity key={i} style={styles.item}>
      <View style={styles.icon}>
        <Icon
          name={item.icon}
          size={30}
          color={this.state.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
        >
        </Icon>
      </View>

      <Text key={i}>{item.name}</Text>
    </TouchableOpacity>
  )

  render () {
    let _scrollView = ScrollView;
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Text style={styles.text}>Bryan Tanner</Text>
        </View>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {this.state.menuItems.map(this.createMenu)}
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  userInfo: {
    flex: 1,
  },
  scrollView: {
    flex: 2,
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    height: 60,
    borderColor: '#dddddd',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  icon: {
    width: 40,
    marginRight: 20,
  },
  text: {
    fontWeight: 'bold',
  }
});

export default Menu;
