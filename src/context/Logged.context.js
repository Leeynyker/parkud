import { createContext, useState } from "react";

const LoggedContext = createContext({mail: null, role: 'user'})

export function LoggedContextProvider({ children }){
    const [mail, setMail] = useState(null);
    const [role, setRole] = useState('staff');
    const [token, setToken] = useState('');
    
    return (
        <LoggedContext.Provider value={ {mail, setMail, role, setRole, token, setToken} }>
            {children}
        </LoggedContext.Provider>
    );
}

export default LoggedContext;