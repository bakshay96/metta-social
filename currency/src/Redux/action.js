import axios from "axios";
import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes";


const getSearchRequestAction =()=>{
    return {type:GET_SEARCH_REQUEST};
};

const getSearchSuccessAction =(payload)=>{
    return {type:GET_SEARCH_SUCCESS,payload}
}

const getSearchFailureAction =()=>{
    return {type:GET_SEARCH_FAILURE};
}


 

//--------------FUNCTION SECTION-----------

// GET DATA FUNCTION
let url = "https://restcountries.com/v3.1/currency";
//let input = inputValues.toUpperCase();
export const getSearchResult =(inputValue)=>(dispatch)=>{
   let  input = inputValue.toUpperCase();
    try {
        dispatch(getSearchRequestAction());
        axios
            .get(`${url}/${input}`)
            .then((res)=>{
                dispatch(getSearchSuccessAction(res.data));
            })
            .catch(()=>{
                dispatch(getSearchFailureAction());
            })
    } catch (error) {
        console.log(error)
        dispatch(getSearchFailureAction())
    }
}