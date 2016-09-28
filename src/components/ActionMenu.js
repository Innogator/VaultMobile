import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';

const ActionMenu = () => {

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    actionView: {
      flex: 1,
      backgroundColor: '#f3f3f3',
    }
  });

  return (
    <View style={styles.actionView}>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="New Folder" onPress={() => {}}>
          <Icon name="md-folder-open" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="New File" onPress={() => {}}>
          <Icon name="md-cloud-upload" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  )
}

export default ActionMenu
