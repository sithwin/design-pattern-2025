import { IStatementInput } from "../interfaces/IStatementInput";

export class CardPurchaseInput implements IStatementInput {
  type = "CARD_PURCHASE";

  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public merchant: string,
    public cardLastFour: string
  ) {}

  getStatementLine(): string {
    return `${this.date.toISOString()} | ${this.type} | -$${this.amount.toFixed(
      2
    )} | ${this.merchant} (${this.cardLastFour}) | ${this.description}`;
  }
}
