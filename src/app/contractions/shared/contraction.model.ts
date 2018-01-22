export interface Contraction {
  id?: string;
  startTime: Date;
  timing: boolean;
  details: boolean;
  duration?: number; // Milliseconds
  interval?: number; // Milliseconds
}
