import {
  InfectionTreatmentFactory,
  FluTreatmentFactory,
  ArthritisTreatmentFactory,
} from "./MedicineFactory";
import { Flu } from "./diseases/Flu";
import { Infection } from "./diseases/Infection";
import { Arthritis } from "./diseases/Arthritis";

// Create specific treatment factories
const fluFactory = new FluTreatmentFactory();
const infectionFactory = new InfectionTreatmentFactory();
const arthritisFactory = new ArthritisTreatmentFactory();

// Treat different diseases
const flu = new Flu("moderate");
const fluMedicine = fluFactory.createMedicine(flu);
console.log(`Treating flu with: ${fluMedicine.getPrescription()}`);

const infection = new Infection("severe");
const infectionMedicine = infectionFactory.createMedicine(infection);
console.log(`Treating infection with: ${infectionMedicine.getPrescription()}`);

const arthritis = new Arthritis("mild");
const arthritisMedicine = arthritisFactory.createMedicine(arthritis);
console.log(`Treating arthritis with: ${arthritisMedicine.getPrescription()}`);
