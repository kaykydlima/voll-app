import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

import Home from "./Home"
import Consultation from "./Consultation"
import Search from "./Search"
import Profile from "./Profile"

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#002851',
    height: 75,
    paddingBottom: 8 
  },
  tabBarActiveTintColor: '#339CFF',
  tabBarInactiveTintColor: '#FFF',
}

const tabs = [
  {
    id: 1,
    name: 'Início',
    component: Home,
    icon: 'home'
  },
  {
    id: 2,
    name: 'Consultas',
    component: Consultation,
    icon: 'calendar'
  },
  {
    id: 3,
    name: 'Explorar',
    component: Search,
    icon: 'search'
  },
  {
    id: 4,
    name: 'Perfil',
    component: Profile,
    icon: 'person'
  },
]

export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={ screenOptions }
    >
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Ionicons name={tab.icon} color={color} size={size} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
