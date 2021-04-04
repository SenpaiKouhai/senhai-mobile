import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { Appbar, Text, TextInput } from 'react-native-paper'
import { useSelector } from 'react-redux';

const TabAppBar = () => {
    const navigation = useNavigation()
    const name = useSelector( state => state.settings.header)
    // console.log(name)
    return (
        <Appbar.Header style={styles.root} >
            { name == 'Home' && <Appbar.Action icon="menu" onPress={ () => navigation.openDrawer()} />}
            <Appbar.Content 
                title={name} 
                subtitle={name == 'Schedule' ? 'Source: MAL' : null}  
            />
            {name == 'Home' ? <Appbar.Action icon="magnify" onPress={ () => navigation.navigate("Search")} /> : null}
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#121212',
    }
})

export default TabAppBar