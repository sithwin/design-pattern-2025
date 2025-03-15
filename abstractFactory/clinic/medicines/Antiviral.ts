import { IMedicine } from "../interfaces/IMedicine";

export class Antiviral implements IMedicine {
  name = "Antiviral";
  dosage: string;
  frequency: string;
  duration: number;

  constructor(diseaseSeverity: "mild" | "moderate" | "severe") {
    this.dosage = diseaseSeverity === "severe" ? "200mg" : "100mg";
    this.frequency = "Twice daily";
    this.duration = diseaseSeverity === "severe" ? 14 : 7;
  }

  getPrescription(): string {
    return `Take ${this.dosage} of ${this.name} ${this.frequency} for ${this.duration} days`;
  }
}
