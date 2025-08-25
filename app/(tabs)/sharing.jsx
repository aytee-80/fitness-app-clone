import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from "expo-blur";
import { Link, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


export default function Sharing(){

    const [showTitle , setShowTitle] = useState('');
    
    const navigate = useNavigation();

    useEffect ( () => {
        navigate.setOptions({
            title: showTitle,
            headerTitleAlign: "center" , headerTintColor : "#fff",
            headerShown: true, 
            headerTransparent: true , 
            HeaderBackground : () => (<BlurView tint = {'dark'} intensity={50} style = {StyleSheet.absoluteFill}/> ), 
            headerRight: () => (<Link href={'/'}><Ionicons name="people" size={29} style = {{marginRight: 15}} color="#a3e635" /></Link>)
        })
    }, [showTitle]);

    const onScroll = (e) => {
        const offsetY = e.nativeEvent.contentOffset.y; 
        if(offsetY > 20){
            setShowTitle('Sharing');
            
        }else if(offsetY <= 20){
            setShowTitle('');
            
        }
    };

    return(
        <ScrollView onScroll={onScroll} style = {style.container} >
            <View>
                <Text style = {style.text1}>Sharing</Text>
                <View style = {style.four4}>
                    <FontAwesome6 name="people-group" size={50} style = {style.logo} color="#a3a3a3" />
                    <Text style = {style.text2}>Share Activity</Text>
                    <Text style = {style.text3}>Invite Friends to share workouts,get
                        inspired and cheer each other on.
                    </Text>
                    <Link href = "/" style = {style.Link1} ><Pressable style = {style.button1} >
                        <Text style = {style.text4}>Invite a Friend</Text>
                    </Pressable></Link>
                </View>
                <View style = {style.text5}><Link href={"/"} style = {style.Link1}><Text style = {style.text5}>See how your data is managed...</Text></Link></View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    Link1: {
        textAlign: 'center'
    },
    text5: {
        color:"#a3e635", 
        marginTop: 40, 
        fontSize: 15, 
        textAlign: 'center' 
    },
    button1:{
        width: '59%', 
        height: 30,
        backgroundColor: '#3d3d3dff',
        borderRadius: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 12
    },text4 : {
        margin: 'auto',
        fontSize: 15,
        fontWeight:600,
        color:'#ffffffff',
    },
    text2: {
        fontSize: 18,
        color:'#fff5f5ff',
        fontWeight: 500,
        textAlign: 'center',
        marginTop: 15 
    },text3 : {
        textAlign: 'center', 
        paddingLeft: 40, 
        paddingRight:40,
        marginTop: 10 ,
        color:'#a3a3a3'
    },
    container: {
        padding : 15,
        paddingLeft: 20,
        paddingRight: 20, 
        paddingTop:25, 
        backgroundColor: '#0a0a0a',
        width:'100%'
    },logo : {
        marginLeft: 'auto',
        marginRight: 'auto', 
        marginTop: 30 
    },text1 : {
        marginTop: 20,
        fontSize: 33,
        fontWeight: 700,
        color:'#f5f5f5'
  },four4 : {
    backgroundColor: '#1d1d1dff',
    width: '100%',
    height: 230,
    marginTop: 20,
    borderRadius: 18
  }
});