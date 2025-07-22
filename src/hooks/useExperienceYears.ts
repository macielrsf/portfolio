import { useMemo } from 'react';

export const useExperienceYears = (startDate: string): number => {
  return useMemo(() => {
    const start = new Date(startDate);
    const now = new Date();
    
    // Calculate the difference in years
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    
    return diffYears;
  }, [startDate]);
}; 