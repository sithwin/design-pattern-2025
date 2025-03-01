import { PaymentProcessorFactory } from "./PaymentProcessorFactory";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

interface PaymentExample {
  processorType: string;
  amount: number;
}

class PaymentExampleRunner {
  private static getConfig(processorType: string) {
    switch (processorType) {
      case "paypal":
        return {
          clientId: process.env.PAYPAL_CLIENT_ID,
          secret: process.env.PAYPAL_SECRET,
          environment: process.env.PAYPAL_ENVIRONMENT || "sandbox",
        };
      case "stripe":
        return {
          apiKey: process.env.STRIPE_API_KEY,
          webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        };
      case "banktransfer":
        return {
          bankName: process.env.BANK_NAME,
          accountNumber: process.env.BANK_ACCOUNT_NUMBER,
          routingNumber: process.env.BANK_ROUTING_NUMBER,
        };
      case "creditdebit":
        return {
          cardNumber: process.env.CARD_NUMBER,
          expirationDate: process.env.CARD_EXPIRATION,
          cvv: process.env.CARD_CVV,
        };
      default:
        throw new Error(`Unsupported processor type: ${processorType}`);
    }
  }

  static async runExample(example: PaymentExample) {
    try {
      const config = this.getConfig(example.processorType);
      const processor = PaymentProcessorFactory.createProcessor(
        example.processorType,
        config
      );

      console.log(`Processing ${example.processorType} payment...`);
      await processor.processPayment(example.amount);

      console.log(`Refunding ${example.processorType} payment...`);
      await processor.refundPayment(example.amount);
    } catch (error) {
      console.error(
        `Error processing ${example.processorType} payment:`,
        error
      );
      throw error;
    }
  }

  static async runExamples(examples: PaymentExample[]) {
    for (const example of examples) {
      try {
        await this.runExample(example);
      } catch (error) {
        // Log error but continue with next example
        console.error(`Skipping ${example.processorType} due to error`);
      }
    }
  }
}

// Define payment examples to run
const paymentExamples: PaymentExample[] = [
  { processorType: "paypal", amount: 100 },
  { processorType: "stripe", amount: 200 },
  { processorType: "banktransfer", amount: 300 },
  { processorType: "creditdebit", amount: 400 },
];

// Execute examples
PaymentExampleRunner.runExamples(paymentExamples)
  .then(() => console.log("All payment examples completed"))
  .catch((err) => console.error("Payment examples failed:", err));
