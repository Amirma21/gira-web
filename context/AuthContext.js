import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const [fetchComplited, setFetchComplited] = useState(false)

  useEffect(() => {
    axios
      .get("/api/auth/user")
      .then((res) => {
        setFetchComplited(true)
        if (res.data.token) {
          setState({ token: res.data.token });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <authContext.Provider value={{ state, setState , fetchComplited}}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;

export function useAuthContext() {
  return useContext(authContext);
}
