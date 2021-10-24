import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

import LogoSvg from '../../assets/logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
        <LogoSvg/>
        <Text style={styles.logoutText}>Sair</Text>
    </View>
  )
}