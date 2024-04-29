import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CharacterDetail = ({route}) => {
  //console.log(route?.params);
  const {characterID} = route?.params;
  return (
    <View>
      <Text>========{characterID}</Text>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({});
