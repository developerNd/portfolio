import { Code, Server, Database } from 'lucide-react'

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

export const skills: Skill[] = [
  { name: 'JavaScript', icon: Code, color: 'bg-yellow-200' },
  { name: 'React', icon: Code, color: 'bg-blue-200' },
  { name: 'Node.js', icon: Server, color: 'bg-green-200' },
  { name: 'TypeScript', icon: Code, color: 'bg-blue-300' },
  { name: 'HTML/CSS', icon: Code, color: 'bg-orange-200' },
  { name: 'PHP', icon: Code, color: 'bg-purple-200' },
  { name: 'Laravel', icon: Code, color: 'bg-red-200' },
  { name: 'Express', icon: Server, color: 'bg-gray-200' },
  { name: 'MongoDB', icon: Database, color: 'bg-green-300' },
  { name: 'PostgreSQL', icon: Database, color: 'bg-blue-200' },
  { name: 'GraphQL', icon: Database, color: 'bg-pink-200' },
  { name: 'Docker', icon: Database, color: 'bg-blue-200' },
]