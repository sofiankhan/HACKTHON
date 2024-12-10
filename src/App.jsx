import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { Mentors } from './pages/Mentors';
import { MentorProfile } from './pages/MentorProfile';
import { Navbar } from './components/Navbar';
import { Toaster } from '@/components/ui/toaster';

// App component
export default function App() {
  const [user, setUser] = useState(null); // User state for authentication

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Protect routes from unauthorized access
  const ProtectedRoute = ({ children }) => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:id"
            element={
              <ProtectedRoute>
                <CourseDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors"
            element={
              <ProtectedRoute>
                <Mentors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentors/:id"
            element={
              <ProtectedRoute>
                <MentorProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}
