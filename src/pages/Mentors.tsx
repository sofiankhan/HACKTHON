import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  Star,
  MessageCircle,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const mentorsData = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Senior Web Developer',
    company: 'Tech Corp',
    experience: '8+ years',
    rating: 4.9,
    reviews: 128,
    specialties: ['React', 'Node.js', 'System Design'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    availability: 'Mon-Fri, 2PM-6PM EST',
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Data Science Lead',
    company: 'Analytics Co',
    experience: '10+ years',
    rating: 4.8,
    reviews: 156,
    specialties: ['Python', 'Machine Learning', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    availability: 'Tue-Sat, 9AM-1PM EST',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    title: 'Mobile Development Expert',
    company: 'App Studios',
    experience: '6+ years',
    rating: 4.7,
    reviews: 92,
    specialties: ['React Native', 'iOS', 'Android'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    availability: 'Mon-Thu, 10AM-4PM EST',
  },
];

export function Mentors() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Expert Mentors</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentorsData.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {mentor.company}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>{mentor.experience} experience</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>
                    {mentor.rating} ({mentor.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{mentor.availability}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <Button variant="outline" className="space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Message</span>
                </Button>
                <Link
                  to={`/mentors/${mentor.id}`}
                  className="text-primary hover:underline text-sm flex items-center"
                >
                  View Profile
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}