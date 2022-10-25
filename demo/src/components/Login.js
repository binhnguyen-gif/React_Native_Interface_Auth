import React from 'react'
import {View, StyleSheet, TextInput, Text, Image, Button, Linking} from 'react-native'

function Login({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.login}>
                <Image style={styles.image} source={require('../assets/logo.png')}></Image>
                <Text style={styles.login_title}>Welcome back.</Text>
                <View>
                    <TextInput placeholder='Email' maxLength={20} style={styles.input}></TextInput>
                </View>
                <View>
                    <TextInput placeholder='Password' maxLength={20} style={styles.input}></TextInput>
                    <Text style={{textAlign: "right", marginTop: 8, opacity: 0.3}} onPress={() => navigation.navigate('Register')}>Forgot your password?</Text>
                </View>
                <View style={styles.btn_login}>
                    <Button title='LOGIN' color="#fff"></Button>
                </View>
                <View style={{marginTop: 20}}>
                    <Text>Dont't have an account ? <Text  onPress={() => navigation.navigate('Register')} style={{color: "#560CCE"}}>Sign up</Text></Text>
                </View>
            </View>
        </View>
    );
};

export default Login;

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
        width: 300
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
        padding: 5
    },
    sign_up : {
        width: 300,
        marginTop: 20,
        borderRadius: 5,
        padding: 5
    },
    input : {
        // paddingVertical: 20,
        // paddingHorizontal: 100,
        paddingLeft: 10,
        width : 300,
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20
    }
});