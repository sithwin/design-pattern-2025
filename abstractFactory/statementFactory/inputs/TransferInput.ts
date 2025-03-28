import { IStatementInput } from "../interfaces/IStatementInput";

export class TransferInput implements IStatementInput {
  type = "TRANSFER";

  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public fromAccount: string,
    public toAccount: string,
    public reference: string
  ) {}

  getStatementLine(): string {
    return `${this.date.toISOString()} | ${this.type} | $${this.amount.toFixed(
      2
    )} | ${this.fromAccount} → ${this.toAccount} | ${this.reference} | ${
      this.description
    }`;
  }

  getDetails(): string {
    return `Transfer of $${this.amount.toFixed(2)} from ${
      this.fromAccount
    } to ${this.toAccount} on ${this.date.toLocaleDateString()}: ${
      this.description
    }`;
  }
}
