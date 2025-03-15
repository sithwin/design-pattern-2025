import { IMedicine } from "../interfaces/IMedicine";

export class Painkiller implements IMedicine {
  name = "Painkiller";
  dosage: string;
  frequency: string;

  constructor(diseaseSeverity: "mild" | "moderate" | "severe") {
    this.dosage =
      diseaseSeverity === "severe"
        ? "1000mg"
        : diseaseSeverity === "moderate"
        ? "500mg"
        : "250mg";
    this.frequency =
      diseaseSeverity === "severe" ? "Every 4 hours" : "As needed for pain";
  }

  getPrescription(): string {
    return `Take ${this.dosage} of ${this.name} ${this.frequency}. Do not exceed 4000mg per day`;
  }
}
