import axios from "axios";
import { func } from "prop-types";
import { string } from "prop-types";
import { useEffect, useState, useCallback } from "react";

const useFetch = (endpoint, setLoader) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setLoader(true);
    const response = await axios.get(endpoint);
    setData(response.data);
    setLoader(false);
  }, [endpoint, setLoader]);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  }, [fetchData, setLoader]);

  return data;
};

useFetch.propTypes = {
  endpoint: string.isRequired,
  setLoader: func.isRequired,
};

export default useFetch;
