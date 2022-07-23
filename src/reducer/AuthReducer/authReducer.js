import { AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./type"

const init={
    isAuth:false,
    token:'',
    isLoading:false,
    isError:false
}


export const authReducer=(state=init,{type,payload})=>{
switch(type){
    case AUTHENTICATION_REQUEST:{
        return{...state,isLoading:true};
    }
    case AUTHENTICATION_SUCCESS:{
        localStorage.setItem("userData",payload);
        return {...state,isLoading:false,isAuth:true}
    }
    case LOGOUT_REQUEST:{
        return{...state,isLoading:true};

    }
    
    case LOGOUT_SUCCESS:{
        localStorage.removeItem("userData");
        return{...state,isLoading:false,isAuth:false}
    }
    default:{
        return state
    }
}
}