import endpoints from "@services/api";
import axios from "axios";
import Cookie from "js-cookie";
import propTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const ProviderAuth = ({ children }) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

ProviderAuth.propTypes = {
  children: propTypes.node.isRequired,
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProviderAuth = () => {
  const [user, setUser] = useState();
  const signin = async (email, password) => {
    const options = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const { data: access_token } = await axios.post(
      endpoints.auth.login,
      {
        email,
        password,
      },
      options
    );
    if (!access_token) return;
    Cookie.set("token", access_token.access_token, { expires: 5 });
    const token = access_token.access_token;
    axios.defaults.headers.Authorization = `Bearer ${token}`;

    const { data: profile } = await axios.get(endpoints.auth.profile);

    console.log({ profile });
    setUser(profile);
  };

  const logout = () => {
    console.log("going out");
    Cookie.remove("token");
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = "/login";
  };

  return {
    user,
    signin,
    logout,
  };
};
