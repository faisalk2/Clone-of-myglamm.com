import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./type"
import axios from 'axios';


export const getdata=(name)=>(dispatch)=>{
dispatch({type:GET_DATA_REQUEST});
return axios.get(`http://localhost:8080/${name}`).then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GET_DATA_FAILURE}));
}