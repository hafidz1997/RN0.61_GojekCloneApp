import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoBanner = () => {
    return(
        <View style={{paddingTop:16, paddingHorizontal:16}}>
        <View style={{position:'relative'}}>
          <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{
                height:170, width:'100%', borderRadius: 6
              }}/>
          <View style={{width:'100%', height:'100%', position:'absolute',
          backgroundColor:'black', top:0, left: 0, opacity:0.2, borderRadius:6
          }}>
          </View>
          <View style={{height:15, width:60,
              position:'absolute', top:16, left:16}}>
              <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,
                  height:undefined, resizeMode:'contain', flex:1}}/>
          </View>
          <View style={{position:'absolute', bottom:0, left:0, 
                flexDirection:'row',width:'100%', alignItems:'center', padding:16}}>
            <View>
              <Text style={{fontSize:16, fontWeight:'bold', color:'white', marginBottom:8}}>Free G0-FOOD voucher</Text>
              <Text style={{fontSize:10, fontWeight:'400', color:'white'}}>Quick, before they run out!</Text>
            </View>
            <View style={{flex:1, paddingLeft:12}}>
              <TouchableOpacity style={{backgroundColor:'#61A756', padding:8,
                alignSelf:'stretch', borderRadius:4}}>
              <Text style={{color:'white', fontWeight:'bold', fontSize:10, textAlign:'center'}}>GET VOUCHER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingBottom:16, borderBottomColor:'#E8E9ED',
            borderBottomWidth:1, marginBottom:15, marginTop:16}}></View>
      </View>
    )
}

export default GoBanner;