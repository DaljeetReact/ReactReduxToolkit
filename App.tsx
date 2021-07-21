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
   Text,
   ScrollView
 } from 'react-native';
import { decrement, increment } from './Features/Slices/CounterSlice';
import { AddUser,AddUsers } from './Features/Slices/UserSlice';
import {fetchUsers} from './Features/Tunks/UserThunk'
import {ManyUser,singleUSer}  from './Userjson'
import { GetUser } from './Features/Slices/SagaUserSlice';

 const  App =()=>{
   const dispatch = useDispatch();
   const states = useSelector(state=>state);
     return (
       <SafeAreaView style={styles.container}>
         <ScrollView>
       <View >
            <Text style={{ borderBottomColor: 'red',
              borderBottomWidth: 2,
              }}>{JSON.stringify(states)}</Text>
               <Text style={{textAlign:'center',marginTop:50}}>
              ===========Redux Toolkit============
            </Text>
            <View style={styles.section}>
              <Text>Simple Counter with redux Toolkit</Text>
              <Button title="increment" onPress={() => dispatch(increment(1))}/>
              <Button title="decrement" onPress={() => dispatch(decrement(1))}/>
            </View>   
            <Text style={{textAlign:'center',marginTop:50}}>
              ===========Redux Thunks============
            </Text>
            <View style={styles.section}>
              <Text>Use of Redux thunks</Text>
              <Button title="Fetch USer Data" onPress={() => dispatch(fetchUsers())}/>
            </View>
            <Text style={{textAlign:'center',marginTop:50}}>
              ===========Redux Apdater============
            </Text>
            <View style={styles.section}>
              <Text>Use of Create Entity Adapter thunks</Text>

            <Button title="ADD NEW USer Data" onPress={() => dispatch(AddUser(singleUSer)
            )}/> 
            <Button title="many New users " onPress={() => dispatch(AddUsers(ManyUser))}/> 
         </View>
            <Text style={{textAlign:'center',marginTop:50}}>
              ===========Redux Saga============
            </Text>
         <View style={styles.section}>
              <Text>Use of Redux Saga Middleware</Text>
              <Button title="Fetch Saga" onPress={() => dispatch(GetUser('fsdfd'))}/>
            </View>

         </View>
         </ScrollView>
       </SafeAreaView>
     );
   
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1
   },
   section:{
     alignContent:'center',
     alignItems:'center',
     margin:10,
     borderColor:'#eaeaea',
     borderWidth:1,
     backgroundColor:'#eaeaea',
     borderRadius:10,
     padding:10
   }
 });
 
 export default App;
 