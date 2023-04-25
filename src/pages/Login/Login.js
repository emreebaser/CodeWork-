import React from 'react';
import {SafeAreaView, Text, View, TextInput, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';


import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import usePost from '../../hooks/usePost/usePost';

const Login = ({navigation}) => {
  
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();
  function handleLogin(values) {
    
   post(Config.API_AUTH_URL + '/login', values);
  
  }
   
if(error){
  Alert.alert('Dükkan','Bir hata oluştu');
  
  
};
if(data){
  if(data===null){
    Alert.alert('Dükkan','Kullanıcı bulunamadı ')
  }else{
    dispatch({type:'SET_USER',payload:{user}})

    
  }
  
}


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login.logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adınzı giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />

            <Input
              placeholder="Şifrenizi giriniz "
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
export default Login;


const user ={"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0}