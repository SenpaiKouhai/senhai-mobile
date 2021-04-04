import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { Appbar, TextInput } from 'react-native-paper'

const StackAppBar = ({ previous, name }) => {
    const navigation = useNavigation()
    // <Appbar.Action icon="menu" onPress={ () => navigation.openDrawer()} />
    return (
        <Appbar.Header style={styles.root} statusBarHeight={0} >
            {previous ? <Appbar.BackAction onPress={ () => navigation.goBack()} /> : null }
            <Appbar.Content title={name}  />
            <Appbar.Action icon="magnify" onPress={ () => navigation.navigate("Search")} />
            {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#121212',
    }
})

export default StackAppBar