import { IMedicine } from "../interfaces/IMedicine";

export class Antibiotic implements IMedicine {
  name = "Antibiotic";
  dosage: string;
  frequency: string;

  constructor(diseaseSeverity: "mild" | "moderate" | "severe") {
    this.dosage = diseaseSeverity === "severe" ? "500mg" : "250mg";
    this.frequency =
      diseaseSeverity === "severe" ? "3 times daily" : "2 times daily";
  }

  getPrescription(): string {
    return `Take ${this.dosage} of ${this.name} ${this.frequency} for 7-10 days`;
  }
}
