import { PaymentProcessor } from "./interfaces/IPaymentProcessor";
import { EventEmitter } from "events";

type ProcessorConstructor = new (config: any) => PaymentProcessor;

class PaymentMediator extends EventEmitter {
  private processors: Map<string, ProcessorConstructor> = new Map();
  private instances: Map<string, PaymentProcessor> = new Map();

  registerProcessor(type: string, processor: ProcessorConstructor): void {
    const normalizedType = type.toLowerCase();
    if (this.processors.has(normalizedType)) {
      this.emit("warning", `Processor ${type} is already registered`);
      return;
    }
    this.processors.set(normalizedType, processor);
    this.emit("processorRegistered", type);
  }

  createProcessor(type: string, config: any): PaymentProcessor {
    const normalizedType = type.toLowerCase();
    const ProcessorClass = this.processors.get(normalizedType);

    if (!ProcessorClass) {
      const error = new Error(`Unsupported payment processor type: ${type}`);
      this.emit("error", error);
      throw error;
    }

    try {
      const instance = new ProcessorClass(config);
      this.instances.set(normalizedType, instance);
      this.emit("processorCreated", type, instance);
      return instance;
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }

  getProcessor(type: string): PaymentProcessor | undefined {
    return this.instances.get(type.toLowerCase());
  }

  getAllProcessors(): Map<string, PaymentProcessor> {
    return new Map(this.instances);
  }
}

export class PaymentProcessorFactory {
  private static mediator: PaymentMediator = new PaymentMediator();

  static registerProcessor(
    type: string,
    processor: ProcessorConstructor
  ): void {
    this.mediator.registerProcessor(type, processor);
  }

  static createProcessor(type: string, config: any): PaymentProcessor {
    return this.mediator.createProcessor(type, config);
  }

  static getMediator(): PaymentMediator {
    return this.mediator;
  }
}

// Initialize mediator with default processors and event listeners
const mediator = PaymentProcessorFactory.getMediator();

mediator.on("processorRegistered", (type) => {
  console.log(`Processor registered: ${type}`);
});

mediator.on("processorCreated", (type, instance) => {
  console.log(`Processor created: ${type}`);
});

mediator.on("error", (error) => {
  console.error("Payment processing error:", error);
});

// Register default processors
mediator.registerProcessor(
  "paypal",
  require("./processors/PaypalProcessor").PaypalProcessor
);
mediator.registerProcessor(
  "stripe",
  require("./processors/StripeProcessor").StripeProcessor
);
mediator.registerProcessor(
  "banktransfer",
  require("./processors/BankTransferProcessor").BankTransferProcessor
);
