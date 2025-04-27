import { createContext, useContext, useState } from "react";

interface UserDetails {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    isAuthenticated: boolean;
    userDetails: UserDetails | null;
    setUserDetails: (details: UserDetails | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(() => {
        return localStorage.getItem("token");
    });

    const [userDetails, setUserDetailsState] = useState<UserDetails | null>(() => {
        const storedDetails = localStorage.getItem("user_details");
        return storedDetails ? JSON.parse(storedDetails) : null;
    });

    const setToken = (newToken: string | null) => {
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
            // Clear user details when logging out
            setUserDetails(null);
        }
        setTokenState(newToken);
    };

    const setUserDetails = (details: UserDetails | null) => {
        if (details) {
            localStorage.setItem("user_details", JSON.stringify(details));
        } else {
            localStorage.removeItem("user_details");
        }
        setUserDetailsState(details);
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{ 
            token, 
            setToken, 
            isAuthenticated,
            userDetails,
            setUserDetails 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
