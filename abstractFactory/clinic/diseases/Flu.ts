import { IDisease } from "../interfaces/IMedicine";

export class Flu implements IDisease {
  name = "Flu";
  symptoms = ["Fever", "Cough", "Sore throat", "Body aches"];
  severity: "mild" | "moderate" | "severe";

  constructor(severity: "mild" | "moderate" | "severe") {
    this.severity = severity;
  }
}
