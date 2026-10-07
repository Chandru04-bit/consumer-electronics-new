import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('voltix_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem('voltix_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('voltix_user');
    }
  }, [user]);

  const login = (email, password, rememberMe = true) => {
    setLoading(true);
    // Simulate authentication
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setLoading(false);
        // Extract a friendly name from email or set default
        const namePart = email.split('@')[0];
        const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        
        const loggedInUser = {
          email,
          name: formattedName || 'Alex Mercer',
          phone: '+91 98765 43210',
          avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${email}&backgroundColor=00F0FF,8B5CF6`,
          joinedDate: 'October 2026',
          ordersCount: 3
        };

        setUser(loggedInUser);
        if (rememberMe) {
          localStorage.setItem('voltix_user', JSON.stringify(loggedInUser));
        } else {
          sessionStorage.setItem('voltix_user', JSON.stringify(loggedInUser));
        }
        toast.success(`Welcome back, ${loggedInUser.name}!`, { icon: '👋' });
        resolve(loggedInUser);
      }, 500);
    });
  };

  const signup = (userData) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        const newUser = {
          name: userData.fullName,
          email: userData.email,
          phone: userData.phone,
          avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${userData.email}&backgroundColor=00F0FF,FF7A00`,
          joinedDate: 'Today',
          ordersCount: 0
        };
        setUser(newUser);
        localStorage.setItem('voltix_user', JSON.stringify(newUser));
        toast.success('Account created successfully! Welcome to VOLTIX.', { icon: '🚀' });
        resolve(newUser);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('voltix_user');
    sessionStorage.removeItem('voltix_user');
    toast.success('Logged out successfully', { icon: '🔒' });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
