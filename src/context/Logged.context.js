import { createContext, useState } from "react";

export default function LoggedContext({ children }){
    const [loggedMail, setLoggedMail] = useState(null);
    const [loggedRole, setLoggedRole] = useState(null);
    return (
        <LoggedContext value={ {loggedMail, setLoggedMail, loggedRole, setLoggedRole} }>
            {children}
        </LoggedContext>
    );
}