import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  activeTab: {
    color: 'rgb(59,89,152)',
    fontSize: 10,
  },
  inactiveTab: {
    color: 'rgb(204,204,204)',
    fontSize: 10,
  }
});

class VaultTabBar extends Component {
  constructor(props) {
    super(props);

    this.setAnimationValue = this.setAnimationValue.bind(this);
    this.tabIcons = [];
  }

  static propTypes = {
    activeTab: React.PropTypes.number,
    goToPage: React.PropTypes.func,
    tabs: React.PropTypes.array,
  }

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  }

  setAnimationValue({ value, }) {
    this.tabIcons.forEach((icon, i) => {
      const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
      icon.setNativeProps({
        style: {
          color: this.iconColor(progress),
        },
      });
    });
  }

  //color between rgb(59,89,152) and rgb(204,204,204)
  iconColor(progress) {
    const red = 59 + (204 - 59) * progress;
    const green = 89 + (204 - 89) * progress;
    const blue = 152 + (204 - 152) * progress;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  render() {
    return (
      <View style={[ styles.tabs, this.props.style ]}>
        {this.props.tabs.map((tab, i) => {
          return (
            <TouchableOpacity key={tab.name} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                  name={tab.icon}
                  size={30}
                  color={this.props.activeTab === i ? 'rgb(59,89,152)' : 'rgb(204,204,204)'}
                  ref={(icon) => { this.tabIcons[i] = icon; }}
              />
              <Text style={this.props.activeTab === i ? styles.activeTab : styles.inactiveTab}>
                {tab.name}
              </Text>
          </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

export default VaultTabBar;
