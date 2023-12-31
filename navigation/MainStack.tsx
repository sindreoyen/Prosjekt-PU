import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/mainNavScreens/HomeScreen';
import ProfileScreen from '../screens/mainNavScreens/ProfileScreen';
import SearchStack from '../screens/mainNavScreens/friendsScreens/SearchStack';
import ProgramScreen from '../screens/mainNavScreens/Program';
import Groups from '../screens/mainNavScreens/Groups';
import NewGroup from '../screens/mainNavScreens/NewGroup';  
import LogProgressScreen from '../screens/mainNavScreens/LogProgressScreen';
import { SafeAreaView } from 'react-native';

// Screen Names
const homeName:any = "Home";
const profileName:any = "Profile";
const search:any = "Search";
const groups:any = "Groups";
const program:any = "Program";
const newGroup:any = "NewGroup";
const progress:any = "Progress";

const Tab: any = createBottomTabNavigator();
const Stack: any = createStackNavigator();

export default function MainStack() {
    return (
        <SafeAreaView style={{
            backgroundColor: "rgba(10, 10, 10, 1)",
            width: "100%",
            height:"100%"
            }}>
            <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    "tabBarActiveTintColor": "tomato",
                    "tabBarInactiveTintColor": "grey",
                    "tabBarLabelStyle": {
                        "fontSize": 10
                    },
                    "tabBarItemStyle": {
                        "backgroundColor": "rgba(10, 10, 10, 1)"
                    },
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ],

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        switch (rn) {
                            case homeName:
                                iconName = focused ? 'home' : 'home-outline'
                                break
                            case profileName:
                                iconName = focused ? 'person' : 'person-outline'
                                break
                            case search:
                                iconName = 'search'
                                break
                            case groups:
                                iconName = focused ? 'people' : 'people-outline'
                                break
                            case program:
                                iconName = focused ? 'barbell' : 'barbell-outline'
                                break
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
            >

                <Tab.Screen name={homeName}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Tab.Screen name={search}
                    component={SearchStack}
                    options={{ headerShown: false }}
                />
                <Tab.Screen name={program} 
                component={ProgramScreen}
                options={{ headerShown: false }}
                />
                <Tab.Screen name={groups}
                    component={GroupsStack}
                    options={{ headerShown: false }}
                />
                <Tab.Screen name={profileName} 
                component={ProfileStack}
                options={{ headerShown: false }}
                />

            </Tab.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
}

function GroupsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={groups}
          component={Groups}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={newGroup}
          component={NewGroup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}

function ProfileStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={profileName}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={progress}
          component={LogProgressScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}