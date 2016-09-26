import React, { Component } from 'react';
import {
  NativeModules,
  StyleSheet,
  PanResponder,
  View
} from 'react-native';
var deviceScreen = NativeModules.UIManager.Dimensions.window

class CaptureGesture extends Component {
  componentWillMount() {
    this._panGesture = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => { return false },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => { return false },
      onMoveShouldSetPanResponder: (evt, gestureState) => { return false },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => { return false },
    });
  }

  render () {
    var style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: this.props.width || deviceScreen.width,
      height: deviceScreen.height,
      backgroundColor: 'transparent'
    }
    return (
      <View style={style} {...this._panGesture.panHandlers} />
    );
  }
}

export default CaptureGesture;
