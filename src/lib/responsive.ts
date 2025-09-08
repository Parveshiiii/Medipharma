import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Breakpoint values in pixels
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// Media query helpers
export const mediaQuery: Record<Breakpoint, string> = Object.entries(
  BREAKPOINTS
).reduce<Record<Breakpoint, string>>((acc, [bpKey, bpValue]) => {
  acc[bpKey as Breakpoint] = `@media (min-width: ${bpValue}px)`;
  return acc;
}, {} as Record<Breakpoint, string>);

// Check if viewport is larger than a breakpoint
export function isViewportLargerThan(breakpoint: Breakpoint): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`).matches;
}

// Get current breakpoint based on viewport width
export function getCurrentBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'sm';

  const viewportWidth = window.innerWidth;

  if (viewportWidth >= BREAKPOINTS['2xl']) return '2xl';
  if (viewportWidth >= BREAKPOINTS.xl) return 'xl';
  if (viewportWidth >= BREAKPOINTS.lg) return 'lg';
  if (viewportWidth >= BREAKPOINTS.md) return 'md';
  return 'sm';
}

// Hook to get current breakpoint
export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    typeof window !== 'undefined' ? getCurrentBreakpoint() : 'sm'
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handleResize = (): void => {
      setBreakpoint(getCurrentBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return breakpoint;
}

interface BreakpointProps {
  breakpoint: Breakpoint;
  children: ReactNode;
}

// Hide component on specified breakpoint and larger
export function HideOn({ breakpoint, children }: BreakpointProps) {
  const currentBreakpoint = useBreakpoint();
  const breakpointWidth = BREAKPOINTS[breakpoint];
  const currentWidth = BREAKPOINTS[currentBreakpoint];

  return currentWidth >= breakpointWidth ? null : <>{children}</>;
}

// Show component only on specified breakpoint and larger
export function ShowOn({ breakpoint, children }: BreakpointProps) {
  const currentBreakpoint = useBreakpoint();
  const breakpointWidth = BREAKPOINTS[breakpoint];
  const currentWidth = BREAKPOINTS[currentBreakpoint];

  return currentWidth < breakpointWidth ? null : <>{children}</>;
}

// Export the breakpoints constant
export const breakpoints: Record<Breakpoint, number> = BREAKPOINTS;
