import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {DetailKontak, Home, TambahKontak, EditKontak} from "../pages"

const Stack = createStackNavigator();

const Router= () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="TambahKontak" component={TambahKontak} options={{title: "Tambah Kontak"}}/>
          <Stack.Screen name="DetailKontak" component={DetailKontak} options={{title: "Detail Kontak"}} />
          <Stack.Screen name="EditKontak" component={EditKontak} options={{title: "Edit Kontak"}}/>

        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
