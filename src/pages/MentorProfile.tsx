import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  GraduationCap,
  Star,
  MessageCircle,
  Calendar,
  Mail,
  Globe,
  Clock,
  CheckCircle,
} from 'lucide-react';

const mentorsData = {
  '1': {
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
    bio: 'Experienced web developer with a passion for teaching and helping others grow in their tech careers. Specialized in modern web technologies and best practices.',
    achievements: [
      'Led 100+ successful mentorship sessions',
      'Developed curriculum for web development bootcamp',
      'Published author on web development topics',
    ],
    hourlyRate: '$120/hour',
    languages: ['English', 'Spanish'],
  },
  '2': {
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
    bio: 'Data science expert with extensive experience in machine learning and analytics. Passionate about making complex concepts accessible to learners.',
    achievements: [
      'Published research in machine learning',
      'Developed AI courses for top platforms',
      'Mentored 200+ data science students',
    ],
    hourlyRate: '$150/hour',
    languages: ['English', 'Mandarin'],
  },
  '3': {
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
    bio: 'Mobile app development specialist with hands-on experience in both iOS and Android. Focused on helping developers build robust, scalable mobile applications.',
    achievements: [
      'Created top-rated mobile apps',
      'Speaker at mobile dev conferences',
      'Technical reviewer for mobile dev books',
    ],
    hourlyRate: '$130/hour',
    languages: ['English', 'French'],
  },
};

export function MentorProfile() {
  const { id } = useParams();
  const mentor = mentorsData[id as keyof typeof mentorsData];

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-6 mb-8">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold">{mentor.name}</h1>
              <p className="text-xl text-muted-foreground">{mentor.title}</p>
              <p className="text-muted-foreground">{mentor.company}</p>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-medium">
                  {mentor.rating} ({mentor.reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground">{mentor.bio}</p>
          </Card>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {mentor.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="space-y-3">
              {mentor.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-6">
            <div className="text-2xl font-bold mb-4">{mentor.hourlyRate}</div>
            <Button className="w-full mb-6">Book a Session</Button>
            <Button variant="outline" className="w-full mb-6">
              <MessageCircle className="h-4 w-4 mr-2" />
              Send Message
            </Button>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Experience</div>
                  <div className="text-sm text-muted-foreground">
                    {mentor.experience}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Availability</div>
                  <div className="text-sm text-muted-foreground">
                    {mentor.availability}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Languages</div>
                  <div className="text-sm text-muted-foreground">
                    {mentor.languages.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}