import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import axios from 'axios';
import { handleAxiosRequest, handleAxiosResponse } from '../config/axiosConfig';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  //Set backend URL
  axios.defaults.baseURL = 'https://10.0.2.2:5000/'
  //Set default timeout
  axios.defaults.timeout = 30000
  //Inject token for authorization
  axios.interceptors.request.use(
    handleAxiosRequest,
    error => Promise.reject(error)
  )
  //Handle Axios Response
  axios.interceptors.response.use(
    handleAxiosResponse,
    error => Promise.reject(error)
  )

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
