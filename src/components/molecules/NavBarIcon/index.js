import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBarIcon = (props) => {
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={props.onPress}>
                <Image style={{width:26, height:26}} source={props.img} />
                <Text style={{fontSize:10, color: props.active ? '#41AB4A' : '#545454', marginTop:5}}>{props.title}</Text>
            </TouchableOpacity>       
        </View>
    )
}

export default NavBarIcon;