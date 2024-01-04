import axios from "axios";
import { GET_SEARCH_FAILURE, GET_SEARCH_NOTDATA, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes";


export const getSearchRequestAction =()=>{
    return {type:GET_SEARCH_REQUEST};
};

export const getSearchSuccessAction =(payload)=>{
    return {type:GET_SEARCH_SUCCESS,payload}
}

export const getSearchFailureAction =()=>{
    return {type:GET_SEARCH_FAILURE};
}

export const getSearchNodataAction =()=>{
    return {type:GET_SEARCH_NOTDATA};
}


 

//--------------FUNCTION SECTION-----------

// GET DATA FUNCTION
let url = "https://restcountries.com/v3.1/currency";
//let input = inputValues.toUpperCase();
export const getSearchResult =(inputValue)=>(dispatch)=>{
    getSearchRequestAction();
   let  input = inputValue.toUpperCase();
   console.log("Action input",inputValue);
    try {
        dispatch(getSearchRequestAction());
        axios
            .get(`${url}/${input}`)
            .then((res)=>{
                console.log("fetch request",res.data)
                if(res.data.length>0)
                {

                    dispatch(getSearchSuccessAction(res.data));
                }
                else{
                    console.log("fetch else block")
                dispatch(getSearchNodataAction());
                }
            })
            .catch(()=>{
                console.log("acton catch")
                dispatch(getSearchFailureAction());
            })
    } catch (error) {
        
        dispatch(getSearchFailureAction())
    }
}