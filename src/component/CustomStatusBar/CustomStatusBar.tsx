import React from 'react';
import {View, StatusBar} from 'react-native';
import {styles} from './CustomStatusBarStyle';

interface Props {
  backgroundColor: string;
  color?: string;
  barStyle?: any;
  isFocused: boolean
}
export const CustomStatusBar = (props: Props) => {
  return (
    <View style={[styles.statusBar, {backgroundColor: props.backgroundColor}]}>
      {props.isFocused ? <StatusBar translucent {...props} barStyle={props.barStyle}/> : null}
    </View>
  );
};
