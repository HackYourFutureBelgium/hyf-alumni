import React, {createContext, useState, useEffect} from 'react'

export const AlumniContext = createContext();

const AlumniContextProvider = (props) => {
    const existingToken = JSON.parse(localStorage.getItem('companyToken'))
    const [authToken, setAuthToken] = useState(existingToken)
    
    const setToken =(data)=> {
        localStorage.setItem('companyToken',JSON.stringify(data))
        setAuthToken(data)
    }
   useEffect(() => {
       // effect
       return () => {
           //cleanup
       }
   }, [])
    
    return ( 
        <AlumniContext.Provider value={{authToken, setAuthToken:setToken}}>
            {props.children}
        </AlumniContext.Provider>
     );
}
 
export default AlumniContextProvider;