import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Navigator,
  TouchableOpacity
} from 'react-native';
import SimpleExample from './src/components/SimpleExample';
import ScrollableTabsExample from './src/components/ScrollableTabsExample';
import OverlayExample from './src/components/OverlayExample';
import FacebookExample from './src/components/FacebookExample';
import DynamicExample from './src/components/DynamicExample';
import VaultTabs from './src/components/VaultTabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  button: {
    padding: 10
  },
  navigator: {
    flex: 1
  }
});

class VaultMobile extends Component {

  renderScene(route, nav) {
    switch (route.id) {
      case 'simple':
        return <SimpleExample />;
      case 'scrollable':
        return <ScrollableTabsExample />;
      case 'overlay':
        return <OverlayExample />;
      case 'facebook':
        return <FacebookExample />;
      case 'dynamic':
        return <DynamicExample />;
      case 'custom':
        return <VaultTabs />;
      default:
        return (
          <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => nav.push({ id: 'simple' })}
            >
              <Text>Simple example</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => nav.push({ id: 'scrollable' })}
            >
              <Text>Scrollable example</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => nav.push({ id: 'overlay' })}
            >
              <Text>Overlay example</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => nav.push({ id: 'facebook' })}
            >
              <Text>Facebook example</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => nav.push({ id: 'dynamic' })}
            >
              <Text>Dynamic example</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => nav.push({ id: 'custom' })}
            >
              <Text>Custom example</Text>
            </TouchableOpacity>
          </View>
        );
    }
  }

  render() {
    return (
      <Navigator
          style={styles.navigator}
          initialRoute={{}}
          renderScene={this.renderScene}
      />
    );
  }
}

export default VaultMobile;
