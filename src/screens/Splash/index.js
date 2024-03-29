import React, { useState, useEffect } from "react";
import { Text, Dimensions, SafeAreaView, ScrollView } from "react-native";

//local imports
import Header from "../../components/Header.component";
import styles from "./style";
import MyStatusBar from "../../components/StatusBar";

const Index = ({ navigation, ...props }) => {
  return (
    <>
      <MyStatusBar backgroundColor="#F6F9FE" />
      <SafeAreaView style={styles.container}>
        <Header HeadTxt={"Splash"} />
        <ScrollView contentContainerStyle={styles.contStyle} showsVerticalScrollIndicator={false}>
          <Text style={styles.txt1}>Splash</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Index;
