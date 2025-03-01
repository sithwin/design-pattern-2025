import { PaymentProcessor } from "../interfaces/IPaymentProcessor";

export class DebitProcessor implements PaymentProcessor {
  public config: any;

  constructor(config: any) {
    this.config = config;
  }

  async processPayment(amount: number): Promise<void> {
    console.log(`Processing debit card payment of $${amount}`);
    // Debit card specific validation
    this.validateAccountBalance(amount);
    // Process payment
    console.log("Debit card payment processed successfully");
  }

  async refundPayment(amount: number): Promise<void> {
    console.log(`Refunding $${amount} to debit card`);
    // Process refund
    console.log("Debit card refund processed successfully");
  }

  private validateAccountBalance(amount: number): void {
    // Account balance validation logic
    console.log("Validating account balance...");
  }
}
