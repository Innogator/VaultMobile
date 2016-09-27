import React, { Component } from 'react';
import Menu from './Menu';

export default class ControlPanel extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired
  }

  render() {
    let {closeDrawer} = this.props
    return (
      <Menu />
    )
  }
}
