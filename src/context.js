import React, { useState, useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    
    //стейт для формы
    const initialFormData = Object.freeze({
        user: '',
        frontEnd: false,
        backEnd: false,
        hasOther: false,
        position: ''
    });
    const [formData, updateFormData] = useState(initialFormData);

    // стейт для логина и пароля
    const initialUserData = Object.freeze({
        user: '',
        password: ''
    });
    const [userData, updateUserData] = useState(initialUserData);

    return <AppContext.Provider value={{
        formData,
        updateFormData,
        userData,
        updateUserData
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };