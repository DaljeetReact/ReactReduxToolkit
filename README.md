# UnderStanding Redux with redux-saga

in this tutorial i am going to setup the redux With Redux Saga

Redux Saga is<b> middleware</b> that will help handle all the <b>async operation</b> and update the State Object with <b> redux-sagga/effect helper functions </b>

## UseFull Links or Reference or Source
<pre>
Youtube   =>  https://www.youtube.com/watch?v=1K26DIKt3w8
Code Snip =>  https://codesandbox.io/s/redux-toolkit-saga-stoic-euler-cjhgx-0by78?file=/src/App.js
main doc =>  https://redux-saga.js.org/docs/introduction/GettingStarted

yarn add redux-saga
<pre>

<pre>
ReduxSaga
├── ApiRequests   => contain all the axios requests API
│   └── userApi.ts
├── Handlers      => it will Handle all  API's are attached with handler. these are generator functions will handle all the promise 
|   |               
│   └── userHandler.ts
└── watcherSaga.ts  

<b>watcherSaga.ts<b> => This will run in background and watch all the action dispatch. Whenever action dispatch it will call the
                        Api attached handler 
</pre>

# Examples  of code 

## ApiRequests
<pre>
<code>
import axios from "axios";

export const fetchUsersApi=()=>{
    return  axios.request({
        method:'get',
        url:'https://reqres.in/api/users?delay=1'
    })
}
</code>
</pre>

## Handlers
<pre>
<code>
import {call,put} from 'redux-saga/effects';
import { fetchUsersApi } from '../<b>ApiRequests</b>/userApi';
import {SetUser} from '../../Slices/SagaUserSlice'  // Set User us reducer function in Slice function which will change the state 

export function* handleGetUSer(){
    try {
        const response = yield call(fetchUsersApi);
        yield put(SetUser(response.data))  //yield is same as Await it will wait until update data
    } catch (error) {
        console.log('catch error'.error);
    }
}

// all the function will with<b> function* </b> are the generator function
</code>
</pre>



## watcherSaga.JS
<pre>
<code>
import { takeLatest } from "redux-saga/effects";
import { handleGetUSer } from "./Handlers/userHandler";  // Handler function

export function* watcherSaga() {
   yield takeLatest('saga/GetUser',handleGetUSer);  // the action <b> 'saga/GetUser'</b> bind with handler function
 }


// whenever 'GetUser' action is dispatched <b> dispatch(GetUser())</b>  it will run the <b> handlGetUser </b> and that function call <b> fetchUsersApi </b>

  
</code>
</pre>


# Setup link middleware to store

<pre>
<code>
.....
import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import {watcherSaga} from './ReduxSaga/watcherSaga';
......
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, ...getDefaultMiddleware()] as const;  // this will concat all the middleware with old onbe



export const myStore =  configureStore({
    reducer:{
        counter:CountSlice,
        users:UserSlice,
        sagaUsers:SagaSliceReducer
    },
    middleware
}); 

sagaMiddleware.run(watcherSaga);   //this is import to run watcher as background process or to run saga
</code>
</pre>