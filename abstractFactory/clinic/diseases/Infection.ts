import { IDisease } from "../interfaces/IMedicine";

export class Infection implements IDisease {
  name = "Infection";
  symptoms = ["Fever", "Swelling", "Pain", "Redness"];
  severity: "mild" | "moderate" | "severe";

  constructor(severity: "mild" | "moderate" | "severe") {
    this.severity = severity;
  }
}
