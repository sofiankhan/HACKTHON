import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { GraduationCap, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MentorHub</span>
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/mentors">Mentors</Link>
                <Button variant="destructive" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}