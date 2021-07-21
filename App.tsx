/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Fragment, Component } from 'react';
 import { useDispatch,useSelector } from 'react-redux';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Button,
   Text
 } from 'react-native';
import { decrement, increment } from './Features/Slices/CounterSlice';
import { AddUser,AddUsers } from './Features/Slices/UserSlice';
import {fetchUsers} from './Features/Tunks/UserThunk'
import {ManyUser}  from './Userjson'
 const  App =()=>{
   const dispatch = useDispatch();
   const states = useSelector(state=>state);
     return (
       <SafeAreaView>
       <View styles={styles.container}>
            <Text>{JSON.stringify(states)}</Text>
            <Button title="increment" onPress={() => dispatch(increment(1))}>
                +1
            </Button>
            <Button title="decrement" onPress={() => dispatch(decrement(1))}>
                -1
            </Button>


            <Button title="Fetch USer Data" onPress={() => dispatch(fetchUsers())}>
                
            </Button>
       


            <Button title="ADD NEW USer Data" onPress={() => dispatch(AddUser({
                    "avatar":"https://reqres.in/img/faces/7-image.jpg",
                    "email":"traceydw.ramos@reqres.in",
                    "first_name":"singh",
                    "id":7,
                    "last_name":"Ramos"
                })
            )}/> 

          <Button title="many New users " onPress={() => dispatch(AddUsers(ManyUser))}/> 
       </View>
       </SafeAreaView>
     );
   
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   }
 });
 
 export default App;
 