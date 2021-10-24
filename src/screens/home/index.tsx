import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components/Header'
import { styles } from './style'

export function Home(){
    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
}