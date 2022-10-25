import React from 'react'
import {View, StyleSheet, InputForm, Text, Image, Button} from 'react-native'

function GetStarted({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Image style={styles.image} source={require('../assets/logo.png')}></Image>
                <Text style={styles.login_title}>Login Template</Text>
                <Text style={{marginTop: 20, fontSize: 16, textAlign: "center"}}>The easiest way to start with your amazing application.</Text>
                <View style={styles.btn_login}>
                    <Button title='LOGIN' color="#fff" onPress={() => navigation.navigate('Login')}></Button>
                </View>
                <View style={styles.sign_up}>
                    <Button title='SIGN UP' color="#560CCE" onPress={() => navigation.navigate('Register')}></Button>
                </View>
            </View>
        </View>
    );
};

export default GetStarted;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login : {
        display: "flex",
        alignItems: "center",
        width: "90%",
    },
    image: {
        display: "flex",
        alignItems: 'center',
        // justifyContent: 'center',
        width: 80,
        height: 80,
    },
    login_title : {
        marginTop: 23,
        fontSize: 24,
        fontWeight: "700",
        color: "#560CCE",
    },
    btn_login : {
        color: "#fff",
        marginTop: 20,
        width: 300,
        backgroundColor: "#560CCE",
        borderRadius: 5,
        padding: 5,
    },
    sign_up : {
        width: 300,
        marginTop: 20,
        borderRadius: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: "#ccc"
    }
});