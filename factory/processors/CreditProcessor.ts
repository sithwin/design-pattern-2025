import { PaymentProcessor } from "../interfaces/IPaymentProcessor";

export class CreditProcessor implements PaymentProcessor {
  public config: any;

  constructor(config: any) {
    this.config = config;
  }

  async processPayment(amount: number): Promise<void> {
    console.log(`Processing credit card payment of $${amount}`);
    // Credit card specific validation
    this.validateCreditLimit(amount);
    // Process payment
    console.log("Credit card payment processed successfully");
  }

  async refundPayment(amount: number): Promise<void> {
    console.log(`Refunding $${amount} to credit card`);
    // Process refund
    console.log("Credit card refund processed successfully");
  }

  private validateCreditLimit(amount: number): void {
    // Credit limit validation logic
    console.log("Validating credit limit...");
  }
}
