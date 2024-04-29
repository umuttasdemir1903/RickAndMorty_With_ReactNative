import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import CharactersScreen from '../screens/Characters';
import EpisodesScreen from '../screens/Episodes';
import LocationsScreen from '../screens/Locations';
import SettingsScreen from '../screens/Settings';
import Colors from '../theme/colors';
import {tabBarStyle} from '../styles/tabBarStyle';
import TabIcon from '../components/router/TabIcon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            focused={focused}
            color={color}
            size={size}
          />
        ),
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStylee,
        tabBarActiveTintColor: Colors.PURPLE,
      })}>
      <Tab.Screen name={CHARACTERS} component={CharactersScreen} />
      <Tab.Screen name={EPISODES} component={EpisodesScreen} />
      <Tab.Screen name={LOCATIONS} component={LocationsScreen} />
      <Tab.Screen name={SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
