import { GETSINGLE_DATA_FAILURE, GETSINGLE_DATA_REQUEST, GETSINGLE_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./type"
import axios from 'axios';


export const getdata=(name)=>(dispatch)=>{
dispatch({type:GET_DATA_REQUEST});
return axios.get(`https://myglamm.herokuapp.com/${name}`).then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GET_DATA_FAILURE}));
}



export const singledata=(id,name)=>(dispatch)=>{
    console.log(id,name)
    dispatch({type:GETSINGLE_DATA_REQUEST});
    return axios.get(`https://myglamm.herokuapp.com/${name}/${id}`).then((res)=>dispatch({type:GETSINGLE_DATA_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GETSINGLE_DATA_FAILURE}));
    }
