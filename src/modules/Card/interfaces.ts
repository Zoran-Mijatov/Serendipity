import { ReactNode } from 'react';

export interface CardProps {
  imageSource: string;
  icon: ReactNode;
  title: string;
  heading: string;
  paragraph: string;
}
