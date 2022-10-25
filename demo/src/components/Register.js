import React from 'react'
import {View, StyleSheet, TextInput, Text, Image, Button, Linking} from 'react-native'

function Register({navigation}) {
    return (
        <View style={styles.container}>
             <View style={styles.login}>
                <Image style={styles.image} source={require('../assets/logo.png')}></Image>
                <Text style={styles.login_title}>Create Account</Text>
                <View>
                    <TextInput placeholder='Name' maxLength={20} style={styles.input}></TextInput>
                </View>
                <View>
                    <TextInput placeholder='Email' maxLength={20} style={styles.input}></TextInput>
                </View>
                <View>
                    <TextInput placeholder='Password' maxLength={20} style={styles.input}></TextInput>
                </View>
                <View style={styles.btn_login}>
                    <Button title='SIGN UP' color="#fff"></Button>
                </View>
                <View style={{marginTop: 20}}>
                    <Text>Already have an account? <Text  onPress={() => navigation.navigate('Login')} style={{color: "#560CCE"}}>Login</Text></Text>
                </View>
            </View>
        </View>
    );
};

export default Register;

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