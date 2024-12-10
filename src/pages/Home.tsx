import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Rocket, Users, Target, Calendar } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Transform Your Future with Expert Mentorship
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with industry leaders and accelerate your career growth
          </p>
          <Link to="/signup">
            <Button size="lg" className="rounded-full">
              <Rocket className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals with years of experience
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Growth</h3>
            <p className="text-muted-foreground">
              Tailored guidance to help you achieve your career goals
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-muted-foreground">
              Book sessions that fit your timeline and availability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}