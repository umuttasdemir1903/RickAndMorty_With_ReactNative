import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ChartSquare,
  Element3,
  Home,
  LocationTick,
  PresentionChart,
  Profile2User,
  Setting2,
} from 'iconsax-react-native';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';

const TabIcon = ({screenName, focused, size, color}) => {
  if (screenName == CHARACTERS)
    return (
      <Profile2User
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == EPISODES)
    return (
      <Element3
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == LOCATIONS)
    return (
      <LocationTick
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == SETTINGS)
    return (
      <Setting2
        size={focused ? '34' : size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
};

export default TabIcon;

const styles = StyleSheet.create({});
