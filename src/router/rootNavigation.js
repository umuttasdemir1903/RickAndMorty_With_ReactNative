import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHAARACTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import TabNavigation from './tabNavigation';
import CharacterDetail from '../screens/Characters/CharacterDetail';
import {tabBarStyle} from '../styles/tabBarStyle';
import SearchCharacters from '../screens/Characters/SearchCharacters';
import FilterCharacters from '../screens/Characters/FilterCharacters';

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
        name={TABNAVIGATOR}
        component={TabNavigation}
      />
      <Stack.Screen name={CHAARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
