import { StyleSheet, Dimensions } from "react-native";
import React from "react";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
    },
    image:{
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title:{
        fontWeight:'bold',
        fontSize: 15
    },
    description:{
        marginTop: 3,
    },
    innerContainer: {
        padding: 5,
    },
    author:{
        fontStyle: 'italic',
        textAlign:'right'
    },
})