export abstract class PaymentProcessor {
  constructor(protected config: any) {}

  abstract processPayment(amount: number): Promise<void>;
  abstract refundPayment(amount: number): Promise<void>;
}
