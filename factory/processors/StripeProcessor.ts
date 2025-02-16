import { PaymentProcessor } from "../interfaces/IPaymentProcessor";

export class StripeProcessor extends PaymentProcessor {
  constructor(config: any) {
    super(config);
  }
  async processPayment(amount: number): Promise<void> {
    // Stripe specific payment processing logic
    console.log(`Processing Stripe payment of $${amount}`);
    // Implementation would call Stripe API here
  }

  async refundPayment(amount: number): Promise<void> {
    // Stripe specific refund logic
    console.log(`Refunding Stripe payment of $${amount}`);
    // Implementation would call Stripe API here
  }
}
