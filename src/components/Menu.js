import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GetMenuList } from '../data/dataRequests';

class Menu extends Component {
  constructor() {
    super();

    // TODO: move this out into a separate file
    this.state = {
      menuItems: [
        { name: 'Firm', id: 'firm', icon: 'location-city' },
        { name: 'Team', id: 'firm', icon: 'people' },
        { name: 'Client', id: 'firm', icon: 'person' },
        { name: 'User', id: 'firm', icon: 'person' },
        { name: 'Notifications', id: 'notifications', icon: 'notifications' },
      ]
    }
  }

  static propTypes = {
    activeTab: React.PropTypes.string,
    onTabSelected: React.PropTypes.func.isRequired,
  }

  componentWillMount() {
    // TODO: of course, remove these hard coded icons
    const icons = [
      'location-city',
      'people',
      'person'
    ]

    //let data = GetMenuList();
    let data = [
        { name: 'Firm', id: 'firm' },
        { name: 'Team', id: 'team' },
        { name: 'Client', id: 'client' },
        { name: 'User', id: 'user' },
        { name: 'Notifications', id: 'notifications' },
      ]

    // temporarily assign ui icon from list above
    data.forEach((item, index) => (item.icon = index < 3 ? icons[index] : icons[2]))

    this.setState({
      ...this.state,
      menuItems: data,
    })
  }

  createMenu = (item, i) => {
    let selected = this.props.activeTab === item.id;
    let itemColor = selected ? 'rgb(59,89,152)' : 'rgb(204,204,204)';
    return (
      <TouchableOpacity key={i}
          style={selected ? styles.selectedItem : styles.item}
          onPress={() => this.props.onTabSelected(item.id)}>
        <View style={styles.icon}>
          <Icon
            name={item.icon}
            size={30}
            color={itemColor}
          />
        </View>

        <Text key={i} color={itemColor}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

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
  selectedItem: {
    flexDirection: 'row',
    height: 60,
    borderColor: '#dddddd',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#dddddd',
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
