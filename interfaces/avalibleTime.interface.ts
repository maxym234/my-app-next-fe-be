interface TimeSlot {
  id: number;
  time: string;
}
export interface IAvalibleTime {
    date: string;
    time: TimeSlot[]
  }