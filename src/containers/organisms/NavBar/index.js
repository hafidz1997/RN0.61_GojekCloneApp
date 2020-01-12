import React, {Component} from 'react';
import {View} from 'react-native';
import iconHomeActive from '../../../assets/icon/home-active.png';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
    render(){
        return(
        <View style={{height:54, width:'100%', flexDirection:'row', backgroundColor:'white'}}>
            <NavBarIcon onPress={() => this.props.navigation.navigate('Home')} img={iconHomeActive} title='Home' active/>
            <NavBarIcon onPress={() => this.props.navigation.navigate('Orders')} img={require('../../../assets/icon/order.png')} title='Orders'/>
            <NavBarIcon onPress={() => this.props.navigation.navigate('')} img={require('../../../assets/icon/help.png')} title='Help'/>
            <NavBarIcon onPress={() => this.props.navigation.navigate('')} img={require('../../../assets/icon/inbox.png')} title='Inbox'/>
            <NavBarIcon onPress={() => this.props.navigation.navigate('')} img={require('../../../assets/icon/account.png')} title='Account'/>
        </View>
        )
    }
}

export default withNavigation(NavBar);