import { IStatementInput } from "../interfaces/IStatementInput";

export class WithdrawInput implements IStatementInput {
  type = "WITHDRAW";

  constructor(
    public amount: number,
    public date: Date,
    public description: string
  ) {}

  getStatementLine(): string {
    return `${this.date.toISOString()} | ${this.type} | -$${this.amount.toFixed(
      2
    )} | ${this.description}`;
  }
}
