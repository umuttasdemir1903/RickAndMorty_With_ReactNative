import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CHAARACTERDETAIL, TABNAVIGATOR} from '../utils/routes';
import TabNavigation from './tabNavigation';
import CharacterDetail from '../screens/Characters/CharacterDetail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TABNAVIGATOR} component={TabNavigation} />
      <Stack.Screen name={CHAARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
