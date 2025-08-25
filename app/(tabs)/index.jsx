import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BlurView } from 'expo-blur';
import { Link, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Index() {
  const now = new Date();

 const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
  };

  const formattedDate = new Intl.DateTimeFormat('en-Us' , options).format(now)

  const navigation = useNavigation(); 
  const [showHeader, setShowHeader] = useState(false);

  useEffect ( () => {
    navigation.setOptions({
      headerShown : showHeader,
      title: 'Summary', 
      headerTitleAlign: 'center' ,
      headerTransparent: true, 
      headerBackground: () => ( <BlurView tint="dark" intensity={50} style = {StyleSheet.absoluteFill} />),
      headerTintColor : '#fff'
    });
  }, [showHeader]);

  const onScroll = (e) =>{
    const offsetY = e.nativeEvent.contentOffset.y; 
    if (offsetY > 50 && !showHeader){
      setShowHeader(true);
      
    }else if(offsetY <= 50 && showHeader){
      setShowHeader(false); 
      
    }
  };
  
  return (
    <ScrollView style = {styles.container} onScroll={onScroll} scrollEventThrottle={16}>
      <Text style = {styles.text1}>{formattedDate}</Text>
      <View style = {styles.l1}>
        <Text style = {styles.Text2}>Summary </Text>
        <Link href={'/sharing'}>
        <Pressable style = {styles.account}>
        <MaterialCommunityIcons name="account-circle-outline" size={24} color="#a3e635" style = {styles.logo}/>
        </Pressable>
        </Link>
      </View>
      
      <Link href={'/sharing'} asChild>
      
      <Pressable style = {styles.Activity} >
          <Text style = {styles.text5}>Activity Ring</Text>
          <View style = {styles.line2}></View>
          <View style = {styles.d}>
            <View style = {styles.circle}>
              <View style = {styles.circle2}></View>
            </View>
            <View style = {styles.div1}>
                <Text style = {styles.text6}>Move</Text>
            <Text style = {styles.unitsT}>18/120<Text style = {styles.units}>KCAL</Text></Text>
          </View>
          </View>
          
      </Pressable>
      </Link>
      
      
      <View style = {styles.four}>
        
        <Link href={'/sharing'} asChild>
        <Pressable style = {styles.four1}>
          <View style = {styles.y}><Text style = {styles.text5}>Step Count</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} style = {styles.logo2} color="#a3e635" /></View>
          <View style = {styles.line2}></View>
        </Pressable>
        </Link>

        <Link href={'/sharing'} asChild>
        <Pressable style = {styles.four2}>
          
          <View style = {styles.y}><Text style = {styles.text5}>Step Distance</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} style = {styles.logo2} color="#a3e635" /></View>
          <View style = {styles.line2}></View>
        </Pressable>
        </Link>

        <Link href={'/sharing'} asChild>
        <Pressable style = {styles.four3}>
          <View style = {styles.y}><Text style = {styles.text5}>Sessions</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} style = {styles.logo2} color="#a3e635" /></View>
          
          <View style = {styles.line2}></View>
        </Pressable>
        </Link>

        <Link href={'/sharing'} asChild>
        <Pressable style = {styles.four4}>

          <View style = {styles.y}><Text style = {styles.text5}>Awards</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} style = {styles.logo2} color="#a3e635" /></View>

          <View style = {styles.line2}></View>
        </Pressable>
        </Link>
      </View>
      
      <Link href={'/sharing'} asChild>
      <Pressable style = {styles.Activity2}>
        <View style = {styles.y}><Text style = {styles.text5}>Trends</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} style = {styles.logo2} color="#a3e635" /></View>
       
          <View style = {styles.line2}></View>
      </Pressable>
      </Link>
      
      <View style = {styles.line}></View>
    
      <Link href={'/sharing'} asChild>
      <Pressable style = {styles.button1}>
        <Text style = {styles.bT1}>Edit Summary</Text>
      </Pressable>
      </Link>

      <Link href={'/sharing'} asChild>
      <Pressable style = {styles.button2}>
        <Text style = {styles.bT1}>See All Categories</Text>
      </Pressable>
      </Link>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  account: {
    position:'absolute',
    top:-1
  },
  d: {
    flexDirection: 'row'
    ,alignItems: 'center', 
    
  },
  div1: {
    marginLeft: 30,
    marginTop: -13
  },text6 : {
    color: '#ffffffff', 
    fontSize: 16 
  },unitsT : {
    fontSize : 20, 
    color: '#dc2626', 
    marginTop: -5, 
    letterSpacing: 0.5, 
    fontWeight: 600
  },units : {
    fontSize: 15,
    marginLeft: 2, 
    letterSpacing: 1.5
  },
  circle:{
    width: '30%', 
    height: 100 , 
    backgroundColor: '#b91c1c6c',
    borderRadius: 55, 
    marginLeft:12,
    padding: 55, 
    marginTop: -10
  },circle2: {
    width: '30%', 
    height: 50 , 
    backgroundColor: '#1d1d1dff',
    borderRadius: 55, 
    
    padding: 32, 
    marginTop: -10, 
    position: 'absolute', 
    top: 33, 
    left: 23,
  },
  y:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    
  },logo2: {
    marginRight: 7,
    marginTop: 11
  },
  text5:{
    color:'#ffffffff',
    fontWeight:500,
    fontSize:14,
    marginLeft: 15,
    marginTop: 9
  },
  container: {
    padding : 15,
    paddingLeft: 20,
    paddingRight: 20, 
    paddingTop:25, 
    backgroundColor: '#0a0a0a',
    width:'100%',
    
  }, button1 : {
    backgroundColor: '#1d1d1dff',
    width: '100%',
    height: 39,
    marginBottom: 8,
    borderRadius: 6
  },button2 : {
    backgroundColor: '#1d1d1dff',
    width: '100%',
    height: 39,
    marginBottom: 8,
    borderRadius: 6
  },bT1 : {
    margin : 'auto', 
    fontSize: 15, 
    fontWeight: 500,
    color : '#a3e635',
  }
  ,line : {
    backgroundColor : '#d4d4d427',
    width: '100%',
    height : 1,
    marginTop : 18 ,
    marginBottom : 18 
  },line2 : {
    backgroundColor : '#d4d4d427',
    width: '100%',
    height : 1,
    marginTop : 9 ,
    marginBottom : 18 
  } 
  ,four:{
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },four1 : {
    backgroundColor: '#1d1d1dff',
    width: '48%',
    height: 165,
    borderRadius: 18,
    marginTop: 10,
  },four2 : {
    backgroundColor: '#1d1d1dff',
    width: '48%',
    height: 165,
    borderRadius: 18,
    marginTop: 10
  },four3 : {
    backgroundColor: '#1d1d1dff',
    width: '48%',
     height: 165,
    borderRadius: 18,
    marginTop: 10
  },four4 : {
    backgroundColor:'#1d1d1dff',
    width: '48%',
    height: 165,
    borderRadius: 18,
    marginTop: 10
  }
  ,Activity : {
    backgroundColor: '#1d1d1dff',
    width: '100%',
    height: 165,
    marginTop: 20,
    borderRadius: 18
  },Activity2 : {
    backgroundColor: '#1d1d1dff',
    width: '100%',
    height: 230,
    marginTop: 10,
    borderRadius: 18
  },
  logo : {
    fontSize : 40,
    position : 'absolute',
    right : 0,
    top : 7
  },
  text1 : {
    color : '#737373'
  },Text2 : {
    fontSize: 33,
    fontWeight: 700,
    color:'#f5f5f5'
  }, l1 :{
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  }
});