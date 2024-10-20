export interface AnimationContainerProps {
  children: React.ReactNode;
  customClassName?: string;
  customDelay?: number;
}

export interface TimelineItemProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}

export interface Project {
  title: string;
  description: string;
  github: string;
  view: string;
  stack?: string[];
  image: {
    url: string;
  }[];
}
