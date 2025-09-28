import { LucideIcon } from 'lucide-react';

export interface Step {
  id: number;
  title: string;
  description: string;
  promptTemplate: string;
  placeholder: string;
  icon: LucideIcon;
}