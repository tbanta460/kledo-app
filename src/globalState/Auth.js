import React, {
    useContext,
    createContext,
    useState,
    useEffect,
  } from "react";
  import useLocalStorageState from "use-local-storage-state";
  import { queryClient } from "./queryClient";
  const initialData = {
    jwt: undefined,
  };
  const initialUser = {
    userData: undefined
  }
  export const AuthContext = createContext({
    loggedIn: true,
    data: { jwt: "" },
    onLogin: () => {},
    onLogout: () => {},
    isLoading: true,
    userData: {},
    onUser: () => {}
  });
  export const useAuth = () => {
    return useContext(AuthContext);
  };
  
  export const AuthConsumer = AuthContext.Consumer;
  
  export const AuthProvider = ({ children }) => {
    const [data, setData] = useLocalStorageState("auth", {
      defaultValue: initialData,
    });
    const [userData, setUserData] = useLocalStorageState("user",{
      defaultValue: initialUser
    })
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(false);
    }, [setIsLoading]);
    const onLogin = (newJwt) => {
      setData((prevData) => ({ ...prevData, jwt: newJwt }));
    };
    const onUser = (user) => {
      setUserData((prev) => ({
        ...prev,
        userData: user
      }))
    }
    const onLogout = () => {
      setData((prevData) => ({ ...prevData, jwt: undefined }));
      setUserData((prev) => ({...prev, userData: undefined}))
      queryClient.clear();
    };
  
    const loggedIn = !!data.jwt && data.jwt !== "";
    return (
      <AuthContext.Provider
        value={{ data, loggedIn, onLogin, onLogout, isLoading, onUser, userData }}
      >
        {children}
      </AuthContext.Provider>
    );
  };