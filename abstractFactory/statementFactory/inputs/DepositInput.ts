import { IStatementInput } from "../interfaces/IStatementInput";

export class DepositInput implements IStatementInput {
  type = "DEPOSIT";

  constructor(
    public amount: number,
    public date: Date,
    public description: string
  ) {}

  getStatementLine(): string {
    return `${this.date.toISOString()} | ${this.type} | $${this.amount.toFixed(
      2
    )} | ${this.description}`;
  }

  getDetails(): string {
    return `Deposit of $${this.amount.toFixed(
      2
    )} on ${this.date.toLocaleDateString()}: ${this.description}`;
  }
}
