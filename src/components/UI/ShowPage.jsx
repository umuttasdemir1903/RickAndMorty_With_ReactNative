import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';

const ShowPage = ({page}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.BROWN,
        width: 200,
        borderRadius: 5,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
          paddingVertical: 3,
          fontSize: 15,
          fontWeight: '600',
        }}>
        Page:{page}
      </Text>
    </View>
  );
};

export default ShowPage;

const styles = StyleSheet.create({});
