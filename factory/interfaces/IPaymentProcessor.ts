export abstract class PaymentProcessor {
  public config: any;

  constructor(config: any) {
    this.config = config;
  }

  abstract processPayment(amount: number): Promise<void>;
  abstract refundPayment(amount: number): Promise<void>;
}
