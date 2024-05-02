import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/colors';
import {TABNAVIGATOR} from '../../utils/routes';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.bg}>
      <ImageBackground
        source={require('../../assets/rm.jpg')}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.buttonContainerBorder}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(TABNAVIGATOR)}>
              <Text style={styles.textGo}>GO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainerBorder: {
    width: 105,
    height: 105,
    borderBottomWidth: 2,
    borderRightWidth: 8,
    borderTopWidth: 2,
    borderColor: Colors.PURPLE,
    borderRadius: 300,
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: Colors.PURPLE,
    width: 90,
    height: 90,
    borderRadius: 300,

    alignItems: 'center',
    justifyContent: 'center',
  },

  textGo: {
    color: Colors.WHITE,
    fontSize: 36,
    fontWeight: '700',
  },
});
