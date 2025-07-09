import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Templates from './pages/Templates';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0549] via-[#7b297d] to-[#2b0549] text-[#eae8e5]">
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/signup" 
          element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? (<><Header /><Dashboard /></>) : <Navigate to="/login" />} 
        />
        <Route 
          path="/templates" 
          element={isAuthenticated ? (<><Header /><Templates /></>) : <Navigate to="/login" />} 
        />
        <Route 
          path="/settings" 
          element={isAuthenticated ? (<><Header /><Settings /></>) : <Navigate to="/login" />} 
        />
      </Routes>
    </div>
  );
}

function App() {
  // ✅ Favicon setup + Tawk.to injection
  useEffect(() => {
    // Favicon setup
    const favicon = document.getElementById('favicon') as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = '/favicon.ico';
    } else {
      const link = document.createElement('link');
      link.id = 'favicon';
      link.rel = 'icon';
      link.type = 'image/x-icon';
      link.href = '/favicon.ico';
      document.head.appendChild(link);
    }

    // ✅ Tawk.to script injection
    const tawkScript = document.createElement('script');
    tawkScript.type = 'text/javascript';
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/686b7b29c449c7190f6f34ae/1ivhti6nq';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    document.body.appendChild(tawkScript);

    // Optional cleanup if needed
    return () => {
      document.body.removeChild(tawkScript);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
