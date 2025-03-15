import { IMedicine, IDisease } from "./interfaces/IMedicine";
import { Antibiotic } from "./medicines/Antibiotic";
import { Painkiller } from "./medicines/Painkiller";
import { Antiviral } from "./medicines/Antiviral";
import { Infection } from "./diseases/Infection";
import { Flu } from "./diseases/Flu";
import { Arthritis } from "./diseases/Arthritis";

export interface IMedicineFactory {
  createMedicine(disease: IDisease): IMedicine;
  createDisease(severity: "mild" | "moderate" | "severe"): IDisease;
}

export class InfectionTreatmentFactory implements IMedicineFactory {
  createMedicine(disease: IDisease): IMedicine {
    return new Antibiotic(disease.severity);
  }

  createDisease(severity: "mild" | "moderate" | "severe"): IDisease {
    return new Infection(severity);
  }
}

export class FluTreatmentFactory implements IMedicineFactory {
  createMedicine(disease: IDisease): IMedicine {
    return new Antiviral(disease.severity);
  }

  createDisease(severity: "mild" | "moderate" | "severe"): IDisease {
    return new Flu(severity);
  }
}

export class ArthritisTreatmentFactory implements IMedicineFactory {
  createMedicine(disease: IDisease): IMedicine {
    return new Painkiller(disease.severity);
  }

  createDisease(severity: "mild" | "moderate" | "severe"): IDisease {
    return new Arthritis(severity);
  }
}
