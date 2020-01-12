import React from 'react';
import {Text, View, Button} from 'react-native';
import NavBar from '../../organisms/NavBar';

const Orders = (props) =>{
    return(
        <>
        <View style={{flex:1}}>
            <Text>Orders Pages</Text>
            <Button title="Go to detail" onPress={()=> props.navigation.navigate('OrderDetail')}/>
        </View>
        <NavBar/>
        </>
    )
}

export default Orders;