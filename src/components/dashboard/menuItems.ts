import { Calendar, Map, Heart, Phone, Clock, Gift, Home } from 'lucide-react';
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Map, label: 'Venue', path: '/venue' },
  { icon: Heart, label: 'Our Story', path: '/story' },
  { icon: Phone, label: 'Contact', path: '/contact' },
  { icon: Clock, label: 'Timeline', path: '/timeline' },
  { icon: Gift, label: 'Registry', path: '/registry' },
];