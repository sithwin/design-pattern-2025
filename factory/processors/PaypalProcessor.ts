import { PaymentProcessor } from "../interfaces/IPaymentProcessor";

export class PaypalProcessor extends PaymentProcessor {
  constructor(config: any) {
    super(config);
  }
  async processPayment(amount: number): Promise<void> {
    // PayPal specific payment processing logic
    console.log(`Processing PayPal payment of $${amount}`);
    // Implementation would call PayPal API here
  }

  async refundPayment(amount: number): Promise<void> {
    // PayPal specific refund logic
    console.log(`Refunding PayPal payment of $${amount}`);
    // Implementation would call PayPal API here
  }
}
