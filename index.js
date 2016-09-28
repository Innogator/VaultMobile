import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Drawer from 'react-native-drawer';
import ControlPanel from './src/components/ControlPanel';
import Main from './src/components/Main';
import ActionMenu from './src/components/ActionMenu';
class VaultMobile extends Component {
  constructor() {
    super();

    this.state = {
      drawerOpen: false,
      drawerDisabled: false,
      activeTab: "firm",
      activeItem: "",
    }
  }

  closeDrawer = () => {
    this._drawer.close()
  }

  openDrawer = () => {
    this._drawer.open()
  }

  onTabSelected = (id) => {
    console.log("setting tab to: " + id);
    this.setState({
      activeTab: id,
      activeItem: ""
    })
  }

  onItemSelected = (id) => {
    console.log("Item selected is: " + id);
    this.setState({
      activeItem: "",
    })
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={
          <ControlPanel
            activeTab={this.state.activeTab}
            closeDrawer={this.closeDrawer}
            onTabSelected={this.onTabSelected} />
        }
        acceptDoubleTap
        styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => { this.setState({drawerOpen: true})}}
        onClose={() => { this.setState({drawerOpen: false})}}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        disabled={this.state.drawerDisabled}
        openDrawerOffset={0.2}
        closedDrawerOffset={0}
        panOpenMask={0.2}
        negotiatePan
      >
        <Main
          activeTab={this.state.activeTab}
          activeItem={this.state.activeItem}
          onMenuPress={this.openDrawer}
          onItemSelected={this.onItemSelected} />

        <ActionMenu />
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  }
})

export default VaultMobile;
