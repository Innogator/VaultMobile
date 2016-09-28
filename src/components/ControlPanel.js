import React, { Component } from 'react';
import Menu from './Menu';

class ControlPanel extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired,
    activeTab: React.PropTypes.string,
    onTabSelected: React.PropTypes.func.isRequired,
  }

  render() {
    let { closeDrawer, onTabSelected, activeTab } = this.props
    return (
      <Menu activeTab={activeTab} onTabSelected={onTabSelected} />
    )
  }
}

export default ControlPanel;
