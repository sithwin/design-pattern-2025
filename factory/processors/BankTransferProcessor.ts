import { PaymentProcessor } from "../interfaces/IPaymentProcessor";

export class BankTransferProcessor extends PaymentProcessor {
  constructor(config: any) {
    super(config);
  }
  async processPayment(amount: number): Promise<void> {
    // Bank transfer specific payment processing logic
    console.log(`Processing bank transfer of $${amount}`);
    // Implementation would handle bank transfer details
  }

  async refundPayment(amount: number): Promise<void> {
    // Bank transfer specific refund logic
    console.log(`Refunding bank transfer of $${amount}`);
    // Implementation would handle bank transfer refund
  }
}
