import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Book,
  Clock,
  GraduationCap,
  Users,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const coursesData = [
  {
    id: '1',
    title: 'Web Development Mastery',
    description: 'Master modern web development with React, Node.js, and more',
    duration: '12 weeks',
    students: 156,
    mentor: 'John Doe',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    topics: [
      'React Fundamentals',
      'State Management',
      'API Integration',
      'Deployment',
    ],
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and machine learning basics',
    duration: '10 weeks',
    students: 124,
    mentor: 'Jane Smith',
    price: '$349',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    topics: [
      'Python for Data Science',
      'Data Visualization',
      'Statistical Analysis',
      'ML Basics',
    ],
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps with React Native',
    duration: '8 weeks',
    students: 98,
    mentor: 'Mike Johnson',
    price: '$279',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    topics: [
      'React Native Basics',
      'Mobile UI/UX',
      'App State Management',
      'Publishing',
    ],
  },
];

export function Courses() {
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

  const handleEnroll = (courseId: string) => {
    setEnrolledCourses((prev) => [...prev, courseId]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Courses</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-sm">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>{course.mentor}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">{course.price}</span>
                {enrolledCourses.includes(course.id) ? (
                  <Button disabled className="space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Enrolled</span>
                  </Button>
                ) : (
                  <Button onClick={() => handleEnroll(course.id)}>
                    Enroll Now
                  </Button>
                )}
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="text-primary hover:underline text-sm flex items-center mt-4"
              >
                View Details
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}