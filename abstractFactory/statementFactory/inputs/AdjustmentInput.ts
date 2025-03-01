import { IStatementInput } from "../interfaces/IStatementInput";

export class AdjustmentInput implements IStatementInput {
  type = "ADJUSTMENT";

  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public reasonCode: string,
    public isPositive: boolean
  ) {}

  getStatementLine(): string {
    const sign = this.isPositive ? "+" : "-";
    return `${this.date.toISOString()} | ${
      this.type
    } | ${sign}$${this.amount.toFixed(2)} | ${this.reasonCode} | ${
      this.description
    }`;
  }
}
