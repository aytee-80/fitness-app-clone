import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import { Tabs } from "expo-router";
import { StyleSheet } from 'react-native';


export default function TabLayout(){
    return(
        <Tabs screenOptions = {{
            tabBarStyle: {
                height: 65, 
                backgroundColor: '#171717',
                borderTopWidth : 0
            },
            tabBarLabelStyle: {},
            tabBarBackground: () => ( <BlurView  tint= {'dark'} intensity={50} style = { StyleSheet.absoluteFillObject} />)
         }}>
 
            <Tabs.Screen name="index" options={{ 
                title: 'Summary', 
                tabBarIcon: () => <FontAwesome name="circle-o" size={24} color="#a3e635"/>
            }} />
            <Tabs.Screen name='sharing' options={{
                title : 'Sharing',
                tabBarIcon: () => <Ionicons name="people" size={24} color="#a3e635" />
            }} />
                
        </Tabs>
    );
}