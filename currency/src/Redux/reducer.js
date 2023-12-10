import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
    data:[],
};

export const reducer =(state=initialState,{type,payload})=>{
    switch(type)
    {
        case GET_SEARCH_REQUEST:
            return {...state,isLoading:true};
        
        case GET_SEARCH_SUCCESS:
            return {...state, isLoading:false, data:payload};

        case GET_SEARCH_FAILURE:
            return {...state, isLoading:false, isError:true};
        default:
            return state;
    }
}