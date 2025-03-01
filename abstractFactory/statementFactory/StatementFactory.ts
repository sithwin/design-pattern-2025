import { IStatementFactory } from "./interfaces/IStatementFactory";
import { DepositInput } from "./inputs/DepositInput";
import { WithdrawInput } from "./inputs/WithdrawInput";
import { CardPurchaseInput } from "./inputs/CardPurchaseInput";
import { TransferInput } from "./inputs/TransferInput";
import { AdjustmentInput } from "./inputs/AdjustmentInput";

export class StatementFactory implements IStatementFactory {
  createDeposit(amount: number, date: Date, description: string): DepositInput {
    return new DepositInput(amount, date, description);
  }

  createWithdraw(
    amount: number,
    date: Date,
    description: string
  ): WithdrawInput {
    return new WithdrawInput(amount, date, description);
  }

  createCardPurchase(
    amount: number,
    date: Date,
    description: string,
    merchant: string,
    cardLastFour: string
  ): CardPurchaseInput {
    return new CardPurchaseInput(
      amount,
      date,
      description,
      merchant,
      cardLastFour
    );
  }

  createTransfer(
    amount: number,
    date: Date,
    description: string,
    fromAccount: string,
    toAccount: string,
    reference: string
  ): TransferInput {
    return new TransferInput(
      amount,
      date,
      description,
      fromAccount,
      toAccount,
      reference
    );
  }

  createAdjustment(
    amount: number,
    date: Date,
    description: string,
    reasonCode: string,
    isPositive: boolean
  ): AdjustmentInput {
    return new AdjustmentInput(
      amount,
      date,
      description,
      reasonCode,
      isPositive
    );
  }
}
