import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';
class Home extends Component {
    render(){
        return(
            <>
            {/* view mirip div */}
            <View style={{flex:1}}>
            {/* konten */}
            <ScrollView>
            <View style={{ backgroundColor: 'white', flex:1}}>
                {/* searchbar */}
                <SearchFeature/>
                {/* gopay */}
                <HomeGoPay/>
                {/* main feature */}
                <HomeMainFeature/>     
                {/* pemisah */}
                <View style={{height:17, backgroundColor:'#F2F2F4', marginTop:20}}></View>
                {/* news section */}
                <GoNews onPress={()=>this.props.navigation.navigate('NewsDetail')}/>      
                {/* InternalInformation */}
                <GoInfo/>
                {/* bannerSection */}
                <GoBanner/>
                {/* nearbyGofood */}
                <ScrollableProducts/>
            </View>
            </ScrollView>
            {/* menu button */}
            <NavBar/>
            </View>
        </>
        )
    }
}
export default Home;