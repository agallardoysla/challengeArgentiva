import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  title?: string;
  message?: string;
  onRetryPress: () => void;
  showAsButton?: boolean;
}

interface State {}

export default class ListErrorRetryView extends Component<Props, State> {
  // Methods

  render() {
    return <View style={styles.screen}></View>;
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
