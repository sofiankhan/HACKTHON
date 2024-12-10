import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Book,
  Clock,
  GraduationCap,
  Users,
  CheckCircle,
  Calendar,
} from 'lucide-react';

const coursesData = {
  '1': {
    id: '1',
    title: 'Web Development Mastery',
    description:
      'Master modern web development with React, Node.js, and more. This comprehensive course will take you from basics to advanced concepts.',
    duration: '12 weeks',
    students: 156,
    mentor: 'John Doe',
    mentorTitle: 'Senior Web Developer at Tech Corp',
    price: '$299',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    topics: [
      'React Fundamentals',
      'State Management',
      'API Integration',
      'Deployment',
    ],
    schedule: [
      'Live sessions every Tuesday and Thursday',
      'Office hours on Saturdays',
      '24/7 Discord community access',
    ],
    requirements: [
      'Basic HTML, CSS, and JavaScript knowledge',
      'Understanding of web fundamentals',
      'A computer with Node.js installed',
    ],
  },
  // Add other course details here
};

export function CourseDetails() {
  const { id } = useParams();
  const course = coursesData[id as keyof typeof coursesData];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            {course.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <Clock className="h-5 w-5 text-primary mb-2" />
              <div className="text-sm font-medium">Duration</div>
              <div className="text-lg">{course.duration}</div>
            </Card>
            <Card className="p-4">
              <Users className="h-5 w-5 text-primary mb-2" />
              <div className="text-sm font-medium">Students</div>
              <div className="text-lg">{course.students}</div>
            </Card>
            <Card className="p-4">
              <Calendar className="h-5 w-5 text-primary mb-2" />
              <div className="text-sm font-medium">Start Date</div>
              <div className="text-lg">Flexible</div>
            </Card>
            <Card className="p-4">
              <Book className="h-5 w-5 text-primary mb-2" />
              <div className="text-sm font-medium">Modules</div>
              <div className="text-lg">{course.topics.length}</div>
            </Card>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Course Schedule</h2>
              <div className="space-y-2">
                {course.schedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
              <div className="space-y-2">
                {course.requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6">
            <div className="text-3xl font-bold mb-6">{course.price}</div>
            <Button className="w-full mb-4">Enroll Now</Button>
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center space-x-4 mb-4">
                <GraduationCap className="h-12 w-12 text-primary" />
                <div>
                  <div className="font-semibold">{course.mentor}</div>
                  <div className="text-sm text-muted-foreground">
                    {course.mentorTitle}
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Message Instructor
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}