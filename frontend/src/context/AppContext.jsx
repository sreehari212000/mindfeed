import { createContext, useState } from "react";
export const AppContext = createContext()
export default function AppProvider({children}){
    const [user, setUser] = useState(null)
    return (
        <AppContext.Provider value={{user}}>
            {children}
        </AppContext.Provider>
    )
}