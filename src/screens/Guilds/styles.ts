import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24
  },
  guilds:{
    width:'100%'
  }
})