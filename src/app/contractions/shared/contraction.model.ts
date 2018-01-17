export class Contraction {
  id: number;
  startTime: Date;
  endTime: Date;
  frequency: number;
  duration: number;

  constructor(
    id: number,
    startTime: Date,
    endTime: Date,
    frequency: number,
    duration: number
  ) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.frequency = frequency;
    this.duration = duration;
  }
}
