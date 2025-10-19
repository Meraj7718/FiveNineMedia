import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useState, useContext } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = ({ email, password }) => {
        // Simple static auth
        if (email === "admin@example.com" && password === "password") {
            setUser({ email, name: "Admin User" });
            return true;
        }
        return false;
    };
    const logout = () => setUser(null);
    return (_jsx(AuthContext.Provider, { value: { user, login, logout }, children: children }));
};
export const useAuth = () => useContext(AuthContext);
