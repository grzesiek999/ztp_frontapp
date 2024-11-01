import {createContext, useState, useCallback, ReactNode, useEffect} from 'react'
import {SESSION} from "../constant/Session.tsx";



type User = {
    id: number;
    email: string;
    is_admin: boolean;
}

export type UserContextType = {
    user: User | null;
    login: (data: User) => void;
    logout: () => void;
}

export const UserAuth = createContext<UserContextType>({
    user: null,
    login: (data: User) => {},
    logout: () => {},
})

interface UserContextProps {
    children: ReactNode;
}

export function UserContextProvider({children}: UserContextProps) {
    const [user, setUser] = useState<User | null>(null);

    const login = useCallback((data: User) =>{
        setUser(data);
    }, []);

    const logout = useCallback(()=>{
        setUser(null);
    }, []);

    useEffect(()=>{
        if(user){
            const timeout = setTimeout(logout, SESSION.TIME);
            return () => clearTimeout(timeout);
        }
    }, [user, logout]);

    const context = {
        user: user,
        login: login,
        logout: logout,
    };

    return (
        <UserAuth.Provider value={context}>
            {children}
        </UserAuth.Provider>
    );
}