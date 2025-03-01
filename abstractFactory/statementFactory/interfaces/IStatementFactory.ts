import { DepositInput } from "../inputs/DepositInput";
import { WithdrawInput } from "../inputs/WithdrawInput";
import { CardPurchaseInput } from "../inputs/CardPurchaseInput";
import { TransferInput } from "../inputs/TransferInput";
import { AdjustmentInput } from "../inputs/AdjustmentInput";

export interface IStatementFactory {
  createDeposit(amount: number, date: Date, description: string): DepositInput;
  createWithdraw(
    amount: number,
    date: Date,
    description: string
  ): WithdrawInput;
  createCardPurchase(
    amount: number,
    date: Date,
    description: string,
    merchant: string,
    cardLastFour: string
  ): CardPurchaseInput;
  createTransfer(
    amount: number,
    date: Date,
    description: string,
    fromAccount: string,
    toAccount: string,
    reference: string
  ): TransferInput;
  createAdjustment(
    amount: number,
    date: Date,
    description: string,
    reasonCode: string,
    isPositive: boolean
  ): AdjustmentInput;
}
