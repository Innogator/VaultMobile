import React, { Component } from 'react';
import {
} from 'react-native';
import Button from './Button';

class HeaderBar extends Component {
  static propTypes = {
    onMenuPress: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <Button onPress={this.props.onMenuPress} text="Menu">
      </Button>
    );
  }
}

export default HeaderBar;