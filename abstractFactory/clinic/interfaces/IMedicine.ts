export interface IMedicine {
  name: string;
  dosage: string;
  frequency: string;
  getPrescription(): string;
}

export interface IDisease {
  name: string;
  symptoms: string[];
  severity: "mild" | "moderate" | "severe";
}
