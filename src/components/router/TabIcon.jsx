import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Location,
  Notepad,
  Setting,
  User,
} from 'iconsax-react-native';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';

const TabIcon = ({screenName, focused, size, color}) => {
  if (screenName == CHARACTERS)
    return (
      <User
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == EPISODES)
    return (
      <Notepad
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == LOCATIONS)
    return (
      <Location
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == SETTINGS)
    return (
      <Setting
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
};

export default TabIcon;

const styles = StyleSheet.create({});
