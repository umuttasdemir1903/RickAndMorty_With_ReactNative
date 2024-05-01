import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import {TABNAVIGATOR} from '../../utils/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}>
        <Text>Rick and Morty</Text>
        <Button title="Go" onPress={() => navigation.navigate(TABNAVIGATOR)} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    backgroundColor: Colors.PURPLE,
  },
});
