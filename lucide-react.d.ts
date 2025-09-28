declare module 'lucide-react' {
  import React from 'react';

  export interface LucideProps extends React.SVGAttributes<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;

  export const Anchor: LucideIcon;
  export const FileText: LucideIcon;
  export const Bot: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Magnet: LucideIcon;
  export const Zap: LucideIcon;
  export const Infinity: LucideIcon;
  export const Menu: LucideIcon;
  export const Wand: LucideIcon;
  export const Copy: LucideIcon;
  export const Check: LucideIcon;
  export const Loader2: LucideIcon;
  export const Save: LucideIcon;
  export const FileDown: LucideIcon;
  export const RotateCw: LucideIcon;
  export const History: LucideIcon;
  export const X: LucideIcon;

  // Add other icons as needed
}