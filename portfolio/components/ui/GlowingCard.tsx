import React from 'react';
import { cn } from '@/utils/cn';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = 'purple',
}) => {
  return (
    <div className={cn('relative group', className)}>
      <div
        className={cn(
          'absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500',
          glowColor === 'purple' && 'bg-gradient-to-r from-purple to-blue-100',
          glowColor === 'blue' && 'bg-gradient-to-r from-blue-100 to-purple'
        )}
      />
      <div className="relative bg-black-200 rounded-2xl p-6 border border-white-100/10">
        {children}
      </div>
    </div>
  );
};
