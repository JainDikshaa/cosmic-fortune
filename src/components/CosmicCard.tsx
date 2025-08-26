import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CosmicCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const CosmicCard = ({ children, className, hover = false, glow = false }: CosmicCardProps) => {
  const cardClasses = cn(
    'glass-card rounded-2xl p-6',
    hover && 'glass-card-hover cursor-pointer',
    glow && 'pulse-glow',
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

export default CosmicCard;