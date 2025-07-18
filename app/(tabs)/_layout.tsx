import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="agenda/index"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person-circle" color={color} />,
        }}
      />
      <Tabs.Screen name="groups" options={{ href: null }} />
      <Tabs.Screen name="home/taskPage" options={{ href: null }} />
      <Tabs.Screen name="agenda/createGroup" options={{ href: null }} />
    </Tabs>
  );
}
