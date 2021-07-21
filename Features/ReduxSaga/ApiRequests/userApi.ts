import axios from "axios";

export const fetchUsersApi=()=>{
    return  axios.request({
        method:'get',
        url:'https://reqres.in/api/users?delay=1'
    })
}