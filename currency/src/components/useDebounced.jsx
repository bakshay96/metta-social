import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchNodataAction, getSearchRequestAction, getSearchResult } from "../Redux/action";  //action function recall

const useDebouncedApiCall = (apiFunction, delay) => {  
  const { data, isLoading, isError } = useSelector((store) => {   //access store data
    return store;
  });

  const dispatch = useDispatch();           //communication beteen react and redux
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  //console.log("input",input);
  
  useEffect(() => {
    getSearchRequestAction();
    const debounceTimer = setTimeout(() => {
      if(input.trim()==="")
      {
        dispatch(getSearchNodataAction());
      }
      else 
      {

        setDebouncedInput(input);
      }
    }, delay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [input, delay]);

  useEffect(() => {
    const fetchData = async () => {
      // Calling  API function with debounced input

      dispatch(getSearchResult(debouncedInput));
      // const result = await apiFunction(debouncedInput);

      console.log(data);
    };

    if (debouncedInput) {
      fetchData();
    }
  }, [debouncedInput, getSearchResult]);

  const handleInputChange = (value) => {
    console.log("input ", value);
    setInput(value);
  };

  return {
    input,
    handleInputChange,
  };
};

export default useDebouncedApiCall;
