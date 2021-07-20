# ReactReduxToolkit
 in this project i have setup the toolkit in Feature folder which contain these files

 <pre>
 .
├── InitStates   all the init state goes here 
│   └── index.js
├── Slices  the the Slice goes here which contains ALL  the actions and reducer function handle by toolkit automatically
│   └── CounterSlice.ts
└── Store.ts -----> A common place which store all the slice ans export the store

</pre>

#Key points

.createSlice function will handle all the stuff automatically like action and reducer action types.
.PayloadAction from reducTool kit help to control the pay load
. we can directly change the sate inside CreateSlice function with = sign
   Exmple: <code> state.value +=1 ;</code>

======
import {configureStore} from '@reduxjs/toolkit';
configureStore will combine all the slice to use multiple slice reducer in single place

<code>
Example
export const myStore =  configureStore({
    reducer:{
        counter:CounterReducer
    }
});
</code>