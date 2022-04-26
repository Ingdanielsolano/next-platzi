import { useState } from "react";

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: "",
    type: "",
    autoClose: false,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    options,
  });

  const toggleAlert = () => {
    setAlert(defaultOptions);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
