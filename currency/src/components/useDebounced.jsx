import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchRequestAction, getSearchResult } from "../Redux/action";

const useDebouncedApiCall = (apiFunction, delay) => {
  const { data, isLoading, isError } = useSelector((store) => {
    return store;
  });
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  //console.log("input",input);
  const [debouncedInput, setDebouncedInput] = useState("");
  useEffect(() => {
    getSearchRequestAction();
    const debounceTimer = setTimeout(() => {
      setDebouncedInput(input);
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
    console.log("input ",value)
    setInput(value);
  };

  return {
    input,
    handleInputChange,
  };
};

export default useDebouncedApiCall;
