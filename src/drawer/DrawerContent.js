import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, ImageBackground, Dimensions, useWindowDimensions } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { tabSelect } from '../redux/action';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DetectNavbar from 'react-native-detect-navbar-android';

const styles = StyleSheet.create({
    header: {
        marginBottom: 50
    },
    img: {
        width: '100%',
        height: 200,
        // opacity: 0.8
    },
    profileContainer: {
        position: 'absolute',
        bottom: -40,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center'
    },  
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 100 + 100 / 2,
       
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default function DrawerContent({ navigation }) {
    const dispatch = useDispatch()
    const window = useWindowDimensions()

    const [navHeigth, setNavHeight] = useState(0)

    useEffect( () => {
        DetectNavbar.hasSoftKeys().then( (bool) => {
            if(bool) {
                // setIsNavbar(true)
                const screenHeight = Dimensions.get('screen').height;
                const windowHeight = Dimensions.get('window').height;
                const navbarHeight = screenHeight - windowHeight;
                setNavHeight(navbarHeight)
            } else {
                console.log('No soft navbar')
            }
        })
        return () => console.log(" unmount detect nav bar ")
    }, [])
    
    const handleGoHome = () => {
        navigation.navigate('Home')
        dispatch(tabSelect('Home'))
    }
    const handleGoSettings = () => {
        navigation.navigate('Settings')
        dispatch(tabSelect('Settings'))
    }
    
    return (
        <DrawerContentScrollView>
        <View style={{ height: window.height - 48}} >
            <View>
                <View style={styles.header} >
                    <ImageBackground
                        source={{ uri: 'https://www.desktophut.com/wp-content/uploads/2017/12/IRLIViQ.jpg.webp' }}
                        imageStyle={{ opacity: 0.8 }}
                        style={styles.img}
                    >
                        <View style={styles.profileContainer} >
                            <Image 
                                source={{ uri: 'https://c4.wallpaperflare.com/wallpaper/517/94/458/anime-konosuba-god-s-blessing-on-this-wonderful-world-kono-subarashii-sekai-ni-shukufuku-wo-megumin-konosuba-wallpaper-preview.jpg' }}
                                style={styles.profileImg}
                            />
                            <Text style={styles.username} numberOfLines={1} >Megumin</Text>
                            <Text style={{ opacity: 0.6 }} >megumin@gmail.com</Text>
                        </View>
                    </ImageBackground>
                </View>

                <Divider style={{ backgroundColor: 'grey' }} />

                <DrawerItem
                    label="Home"
                    onPress={handleGoHome}
                    icon={ (props) => <MaterialCommunityIcons name='home' color={props.color} size={props.size} />}
                />
                <DrawerItem
                    label="Settings"
                    onPress={handleGoSettings}
                    icon={ (props) => <MaterialIcons name='settings' color={props.color} size={props.size} />}
                />
                <DrawerItem 
                    label="MAL"
                    // onPress={ () => navigation.navigate('sched') }
                    icon={ (props) => <MaterialIcons name='filter-list' color={props.color} size={25} />}
                />
            </View>

            <View style={{ position: 'absolute', bottom: 0, width: '100%' }} >
                {/* <Divider style={{ backgroundColor: 'grey' }} /> */}
                {/* <Text style={{ textAlign: 'right', fontSize: 16, marginTop: 5 }} >Login</Text> */}
            </View>
        </View>
        </DrawerContentScrollView>
    )
}