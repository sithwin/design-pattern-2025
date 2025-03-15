export interface IStatementInput {
  type: string;
  amount: number;
  date: Date;
  description: string;
  getDetails(): string;
}
