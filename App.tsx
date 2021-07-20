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

import {fetchUsers} from './Features/Tunks/UserThunk'

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
 