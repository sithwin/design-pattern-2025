import { IDisease } from "../interfaces/IMedicine";

export class Arthritis implements IDisease {
  name = "Arthritis";
  symptoms = ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion"];
  severity: "mild" | "moderate" | "severe";

  constructor(severity: "mild" | "moderate" | "severe") {
    this.severity = severity;
  }
}
