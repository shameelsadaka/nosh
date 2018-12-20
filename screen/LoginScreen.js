import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    ScrollView,ActivityIndicator
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn:false,
            isUserExists:false,
            formDispaly: 'none',
        };
        setTimeout(()=>{
            this.setState({ formDispaly: 'mobile-number' })
        }, 2000);
    }

    submitMobileNo = ()=>{
        this.setState({ formDispaly: 'loading' })
        setTimeout(()=>{
            alert("Oops. Server is not ready!! We will fix this soon!")
            this.setState({ formDispaly: 'mobile-number' })
        }, 1000);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAwareScrollView  style={styles.container}
                    contentContainerStyle={{flexGrow:1}}>
                    <TouchableWithoutFeedback
                            onPress={Keyboard.dismiss}>
                        <View style={styles.mainContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={require('../assets/images/logoWhite.png')}
                                    resizeMode='contain'>
                                </Image>
                            </View>
                            <View
                                style={{flex:1}} >
                                <View style={styles.mainContainer}>
                                    <View style={styles.mainContent}>
                                        <Text style={styles.title}>Welcome to</Text>
                                        <Text style={styles.title}>Nosh</Text>
                                        <Text style={styles.para}>We will help you to to connect food donors to the needy ones or NGOs</Text>
                                    </View>
                                </View>                                

                                {
                                    (this.state.formDispaly == 'mobile-number') &&
                                    <View style={styles.formContainer}>
                                        <Text style={styles.formInfo}>Sign in to your account or create account</Text>
                                        <TextInput style={styles.input}
                                            placeholder="Phone Number"
                                            placeholderTextColor='#FFFFFFCC'
                                            keyboardType='phone-pad'
                                            underlineColorAndroid="transparent"
                                            returnKeyType='done'
                                            autoCorrect={false}
                                            onSubmitEditing={this.submitMobileNo}
                                        />
                                        <TouchableOpacity
                                            style={styles.buttonContainer}
                                            onPress={this.submitMobileNo}>
                                            <Text style={styles.buttonText}>NEXT</Text>
                                        </TouchableOpacity>
                                    </View>
                                }
                                
                                {
                                    (this.state.formDispaly == 'loading') &&
                                    <View style={styles.loaderContainer}>
                                        <ActivityIndicator size="large" color="#FFFFFF" />
                                    </View>
                                }


                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3390ef',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        height:120,
        paddingVertical:14,
    },
    logo: {
        height: '100%',
    },
    mainContainer: {
        flex: 1,
        justifyContent:'center'
    },
    mainContent: {
        padding:20,
        marginBottom:20,
    },
    title: {
        color: '#FFF',
        fontSize: 40,
        textAlign: 'left',
        fontFamily: 'MontserratBold',
    },
    para: {
        color: '#FFF',
        marginTop:10,
        fontSize: 16,
        textAlign: 'left',
        fontFamily: 'Montserrat',
    },
    formContainer: {
        padding: 20,
        width:'100%',
    },
    loaderContainer: {
        padding: 40,
        width:'100%',
    },
    formInfo:{
        marginBottom:12,
        fontSize:12,
        color:'#FFFFFFDD',
        fontWeight:'bold'
    },
    input: {
        height:50,
        backgroundColor: 'rgba(255,255,255,0.3)',
        color: '#FFF',
        marginBottom: 10,
        paddingHorizontal: 15,
        fontSize:16,
        borderRadius:4,
    },
    buttonContainer: {
        backgroundColor: '#0459ac',
        paddingVertical: 15,
        height:55,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        textAlign: 'center',
        color :'white',
        fontWeight: 'bold',
        fontSize: 17
    }
})