import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';
import { withNavigation } from 'react-navigation';

class HomeGoPay extends Component{
    render(){
        return(
        <View style={{marginTop:8, marginHorizontal:17}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',
              backgroundColor:'#214B93', borderTopLeftRadius:4, borderTopRightRadius:4,
              padding:14}}>
              <Image source={require('../../../assets/icon/gopay.png')} />
              <Text style={{fontSize:17, color:'white', fontWeight:'bold'}}>Rp 50.000.000</Text>
            </View>
            <View style={{backgroundColor:'#2f63bcff', flexDirection:'row', paddingTop
                :20, paddingBottom:14, borderBottomLeftRadius:4, borderBottomRightRadius:4}}>
              <GopayFeature onPress={() => this.navigation.navigate('ScanQRCode') } title='Pay' img={require('../../../assets/icon/pay.png')}/>
              <GopayFeature title='Nearby' img={require('../../../assets/icon/nearby.png')}/>
              <GopayFeature title='Top Up' img={require('../../../assets/icon/topup.png')}/>
              <GopayFeature title='More' img={require('../../../assets/icon/more.png')}/>
            </View>
        </View>
        )
    }
}

export default withNavigation(HomeGoPay);