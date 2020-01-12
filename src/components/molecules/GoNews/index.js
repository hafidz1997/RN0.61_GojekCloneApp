import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = ({onPress}) => {
    return(
    <View style={{paddingTop:16, paddingHorizontal:16}}>
        <View style={{position:'relative'}}>
          <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{
            height:170, width:'100%', borderRadius: 6
          }}/>
          <View style={{width:'100%', height:'100%', position:'absolute',
              backgroundColor:'black', top:0, left: 0, opacity:0.2, borderRadius:6
              }}></View>
          <View style={{height:15, width:60,
              position:'absolute', top:16, left:16}}>
          <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,
              height:undefined, resizeMode:'contain', flex:1}}/>
          </View>
        </View>
        <View style={{paddingTop:16, paddingBottom:20, borderBottomColor:'#E8E9ED',
            borderBottomWidth:1}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>GO-NEWS</Text>
          <Text style={{fontSize:14, fontWeight:'500',
            color:'#7A7A7A', marginBottom:11}}>Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan brunei</Text>
          <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical:11, paddingHorizontal:12,
        alignSelf:'flex-end', borderRadius:4}} onPress={onPress}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:13, textAlign:'center'}}>READ</Text>
          </TouchableOpacity>
        </View>
    </View>
    )
}

export default GoNews;