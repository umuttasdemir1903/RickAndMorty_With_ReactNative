import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CHAARACTERDETAIL, TABNAVIGATOR, WELCOME} from '../utils/routes';
import TabNavigation from './tabNavigation';
import CharacterDetail from '../screens/Characters/CharacterDetail';
import {tabBarStyle} from '../styles/tabBarStyle';
import WelcomeScreen from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: tabBarStyle.headerStyle,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={WELCOME}
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigation}
      />
      <Stack.Screen name={CHAARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
