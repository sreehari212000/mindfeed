import { createContext, useEffect, useState } from "react";
export const AppContext = createContext()
export default function AppProvider({children}){
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('mindfeed_token')
        const email = localStorage.getItem('mindfeed_email')
        if(token && email){
            setUser({email, token})
        }
    }, [])

    const login = ({email, token}) => {
        setUser({email, token})
        localStorage.setItem('mindfeed_token', token)
        localStorage.setItem('mindfeed_email', email)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('mindfeed_token')
        localStorage.removeItem('mindfeed_email')
    }

    return (
        <AppContext.Provider value={{user, setUser, login, logout}}>
            {children}
        </AppContext.Provider>
    )
}