import React, {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const existingToken = JSON.parse(localStorage.getItem('companyToken'))
    const [authToken, setAuthToken] = useState(existingToken)
    
    const setToken =(data)=> {
        localStorage.setItem('companyToken', JSON.stringify(data))
        setAuthToken(data)
    }
    
    return ( 
        <AuthContext.Provider value={{authToken, setAuthToken:setToken}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;