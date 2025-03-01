import { StatementFactory } from "./StatementFactory";

const factory = new StatementFactory();

// Create different types of statement inputs
const deposit = factory.createDeposit(1000, new Date(), "Salary deposit");
const withdraw = factory.createWithdraw(200, new Date(), "ATM withdrawal");
const purchase = factory.createCardPurchase(
  50,
  new Date(),
  "Grocery store",
  "SuperMart",
  "1234"
);
const transfer = factory.createTransfer(
  300,
  new Date(),
  "Rent payment",
  "Checking",
  "Landlord",
  "INV12345"
);
const adjustment = factory.createAdjustment(
  10,
  new Date(),
  "Interest adjustment",
  "INT",
  true
);

// Generate statement lines
console.log(deposit.getStatementLine());
console.log(withdraw.getStatementLine());
console.log(purchase.getStatementLine());
console.log(transfer.getStatementLine());
console.log(adjustment.getStatementLine());
