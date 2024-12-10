import { useAuth } from '@/lib/auth';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Book, 
  Calendar, 
  ChevronRight, 
  GraduationCap, 
  LineChart, 
  Users 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mockCourses = [
  {
    id: '1',
    title: 'Web Development Mastery',
    description: 'Master modern web development',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    mentor: 'John Doe',
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis and visualization',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    mentor: 'Jane Smith',
  },
];

const mockUpcomingSessions = [
  {
    id: '1',
    title: 'React Advanced Concepts',
    mentor: 'John Doe',
    date: '2024-03-20',
    time: '10:00 AM',
  },
  {
    id: '2',
    title: 'Python for Data Analysis',
    mentor: 'Jane Smith',
    date: '2024-03-22',
    time: '2:00 PM',
  },
];

export function Dashboard() {
  const { user } = useAuth();
  const courses = mockCourses; // Replace with API call if dynamic data is available
  const upcomingSessions = mockUpcomingSessions; // Replace with dynamic data if needed

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'}!</h1>
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center space-x-2">
            <Book className="h-5 w-5 text-primary" />
            <span className="font-medium">Courses</span>
          </div>
          <p className="text-2xl font-bold mt-2">{courses.length}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium">Mentors</span>
          </div>
          <p className="text-2xl font-bold mt-2">3</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium">Sessions</span>
          </div>
          <p className="text-2xl font-bold mt-2">{upcomingSessions.length}</p>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-2">
            <LineChart className="h-5 w-5 text-primary" />
            <span className="font-medium">Progress</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {Math.round(
              courses.reduce((acc, course) => acc + course.progress, 0) / 
              (courses.length || 1)
            )}%
          </p>
        </Card>
      </div>

      {/* Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
          {courses.length > 0 ? (
            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id} className="p-4">
                  <div className="flex space-x-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {course.description}
                      </p>
                      <div className="flex items-center space-x-2 mb-2">
                        <GraduationCap className="h-4 w-4" />
                        <span className="text-sm">{course.mentor}</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">
                          {course.progress}% complete
                        </span>
                        <Link
                          to={`/courses/${course.id}`}
                          className="text-sm text-primary flex items-center"
                        >
                          View <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No courses available.</p>
          )}
        </div>

        {/* Upcoming Sessions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {session.mentor}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">
                        {new Date(session.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm">{session.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No upcoming sessions.</p>
          )}
        </div>
      </div>
    </div>
  );
}
