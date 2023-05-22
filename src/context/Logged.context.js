import { createContext, useState } from "react";

const LoggedContext = createContext({mail: null, role: 'user'})

export function LoggedContextProvider({ children }){
    const [mail, setMail] = useState(null);
    const [role, setRole] = useState('admin');
    return (
        <LoggedContext.Provider value={ {mail, setMail, role, setRole} }>
            {children}
        </LoggedContext.Provider>
    );
}

export default LoggedContext;