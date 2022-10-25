import { ADDTOBAG_FAILURE, ADDTOBAG_REQUEST, ADDTOBAG_SUCCESS, DELETE_BAGDATA_FAILURE, DELETE_BAGDATA_REQUEST, DELETE_BAGDATA_SUCCESS, GETSINGLE_DATA_FAILURE, GETSINGLE_DATA_REQUEST, GETSINGLE_DATA_SUCCESS, GET_BAGDATA_FAILURE, GET_BAGDATA_REQUEST, GET_BAGDATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, UPDATE_BAGDATA_FAILURE, UPDATE_BAGDATA_REQUEST, UPDATE_BAGDATA_SUCCESS } from "./type"
import axios from 'axios';


export const getdata=(name,page)=>(dispatch)=>{
if(page==undefined)
{
    page=10;
}
dispatch({type:GET_DATA_REQUEST});
return axios.get(`https://myglamm.herokuapp.com?cetegory=${name}&limit=${page}`).then((res)=>dispatch({type:GET_DATA_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GET_DATA_FAILURE}));
}



export const singledata=(_id,name)=>(dispatch)=>{
    console.log(_id)
    console.log(_id,name)
    dispatch({type:GETSINGLE_DATA_REQUEST})
    return axios.get(`https://myglamm.herokuapp.com?_id=${_id}`).then(res=>dispatch({type:GETSINGLE_DATA_SUCCESS,payload:res.data})).catch(err=>dispatch({type:GETSINGLE_DATA_FAILURE}));
    }

    export const addtobag=(payload)=>(dispatch)=>{
        dispatch({type:ADDTOBAG_REQUEST})
       return axios.post("https://myglamm.herokuapp.com/bag/post",payload)
       .then(res=>{
        return dispatch({type:ADDTOBAG_SUCCESS})
       }).catch(err=>dispatch({type:ADDTOBAG_FAILURE}))
    }

    export const datafrombag=()=>(dispatch)=>{
        dispatch({type:GET_BAGDATA_REQUEST});
      return  axios.get("https://myglamm.herokuapp.com/bag")
      .then(res=>dispatch({type:GET_BAGDATA_SUCCESS,payload:res.data}))
      .catch(err=>dispatch({type:GET_BAGDATA_FAILURE}))
    }

    export const detelebag=(_id)=>(dispatch)=>{

        dispatch({type:DELETE_BAGDATA_REQUEST});
        return  axios.delete(`https://myglamm.herokuapp.com/bag/delete/${_id}`)
        .then(res=>dispatch({type:DELETE_BAGDATA_SUCCESS}))
        .catch(err=>dispatch({type:DELETE_BAGDATA_FAILURE}))
    }

    export const update=(id,payload)=>(dispatch)=>{
        dispatch({type:UPDATE_BAGDATA_REQUEST});
        return axios.patch(`https://myglamm.herokuapp.com/bag/update/${id}`,payload)
        .then(res=>dispatch({type:UPDATE_BAGDATA_SUCCESS}))
        .catch(err=>dispatch({type:UPDATE_BAGDATA_FAILURE}))
    }