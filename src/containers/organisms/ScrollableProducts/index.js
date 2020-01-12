import React, {Component} from 'react';
import {View, Image, Text, ScrollView } from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';
class ScrollableProducts extends Component {
    render() {
        return(
        <View style={{}}>
          <View style={{height:15, width:60, marginLeft:16}}>
                <Image source={require('../../../assets/logo/go-food.png')} style={{width:undefined,
                    height:undefined, resizeMode:'contain', flex:1}}/>
          </View>
          <View style={{paddingHorizontal:16,flexDirection:'row', justifyContent:'space-between',marginBottom:16}}>
            <Text style={{fontWeight:'bold', fontSize:17, color:'#1C1C1C'}}>Nearby Restaurants</Text>
            <Text style={{fontWeight:'bold', fontSize:17, color:'#61A756'}}>See All</Text>
          </View>

          <ScrollView horizontal style={{flexDirection:'row', paddingLeft:16}}>
            <ScrollableItem img={require('../../../assets/dummy/go-food-kfc.jpg')} title='KFC Aeon Mall'/>
            <ScrollableItem img={require('../../../assets/dummy/go-food-gm.jpg')} title='Bakmi GM Aeon Mall'/>
            <ScrollableItem img={require('../../../assets/dummy/go-food-orins.jpg')} title='Martabak Orins'/>
            <ScrollableItem img={require('../../../assets/dummy/go-food-banka.jpg')} title='Martabak Banka'/>
            <ScrollableItem img={require('../../../assets/dummy/go-food-pak-boss.jpg')} title='Ayam Bakar Pak Boss'/>
          </ScrollView>
          <View style={{paddingBottom:16, borderBottomColor:'#E8E9ED',
              borderBottomWidth:1, marginBottom:15, marginTop:16, marginHorizontal:16}}></View>
        </View>
        )
    }
}

export default ScrollableProducts;