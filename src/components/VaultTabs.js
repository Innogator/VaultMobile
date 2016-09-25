import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import VaultTabBar from './VaultTabBar';
import FileList from './FileList';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
})

class VaultTabs extends Component {
  render () {
    const tabs = {
      firm: {
        icon: 'location-city',
        name: 'Firm'
      },
      team: {
        icon: 'people',
        name: 'Team'
      },
      user: {
        icon: 'person',
        name: 'User'
      },
      notifications: {
        icon: 'notifications',
        name: 'Notifications'
      },
      menu: {
        icon: 'menu',
        name: 'Menu'
      },
    }

    return (
      <ScrollableTabView
          style={{ marginTop: 20, }}
          initialPage={1}
          renderTabBar={() => <VaultTabBar />}
      >
        <ScrollView tabLabel={tabs.firm} style={styles.tabView}>
          <FileList />
        </ScrollView>
        <ScrollView tabLabel={tabs.team} style={styles.tabView}>
          <View style={styles.card}>
            <Text>Team</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel={tabs.user} style={styles.tabView}>
          <View style={styles.card}>
            <Text>User</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel={tabs.notifications} style={styles.tabView}>
          <View style={styles.card}>
            <Text>Notifications</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel={tabs.menu} style={styles.tabView}>
          <View style={styles.card}>
            <Text>Menu</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    )
  }
}

export default VaultTabs;
