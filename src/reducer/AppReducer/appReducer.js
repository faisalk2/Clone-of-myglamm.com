import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./type"

const init={
    data:[],
    isLoading:false,
    isError:false
}


export const appReducer=(state=init,{type,payload})=>{
switch(type){
    case GET_DATA_REQUEST:{
        return{
            ...state,
            isLoading:true
        }
    }
    case GET_DATA_SUCCESS:{
        return{
            ...state,
            isLoading:false,
            data:payload
        }
    }
    case GET_DATA_FAILURE:{
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    }
    default:{
        return state
    }
}
}