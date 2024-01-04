import { GET_SEARCH_FAILURE, GET_SEARCH_NOTDATA, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
    data:[],
    isData:false,
    initialState:true,
};

export const reducer =(state=initialState,{type,payload})=>{
    switch(type)
    {
        case GET_SEARCH_REQUEST:
            return {...state,isLoading:true,isError:false};
        
        case GET_SEARCH_SUCCESS:
            return {...state, isLoading:false, data:payload,isData:true,initialState:false,isError:false};
        
        case GET_SEARCH_NOTDATA:
            return {...state, isLoading:false, isData:false, isError:false,data:[],initialState:true}
        case GET_SEARCH_FAILURE:
            return {...state, isLoading:false, isError:true,data:[],initialState:true};
        default:
            return state;
    }
}