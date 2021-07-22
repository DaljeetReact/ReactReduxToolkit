import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import {UserSlice,CountSlice,SagaSliceReducer} from './Slices';
import createSagaMiddleware from 'redux-saga'
import {watcherSaga} from './ReduxSaga/watcherSaga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, ...getDefaultMiddleware()] as const;

export const myStore =  configureStore({
    reducer:{
        counter:CountSlice,
        users:UserSlice,
        sagaUsers:SagaSliceReducer
    },
    middleware
}); 

sagaMiddleware.run(watcherSaga);