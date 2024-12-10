export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  image: string;
  mentor: string;
}

export interface Session {
  id: string;
  title: string;
  mentor: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed';
}