// Strategy
interface PaymentStrategy {
  processPayment(amount: any): void;
}

// ConcreteStratege
class CreditCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: any): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPaymentStrategy implements PaymentStrategy {
  processPayment(amount: any): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

class CryptoPaymentStrategy implements PaymentStrategy {
  processPayment(amount: any): void {
    console.log(`Processing crypto payment of $${amount}`);
  }
}

// Context
class PaymentProseccor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  processorOrder(amount: number) {
    console.log('Processing order using current strategy:');
    this.strategy.processPayment(amount);
  }
}

// 사용 예시
const processor = new PaymentProseccor(new CreditCardPaymentStrategy());
processor.processorOrder(100);

// 런타임에 전략 변경
processor.setStrategy(new PayPalPaymentStrategy());
processor.processorOrder(250);

// 함수형
type PaymentStrategyFunc = (amount: number) => void;

const CreditCardPayment: PaymentStrategyFunc = (amount) => {
  console.log(`Processing credit card payment of $${amount}`);
};

const PayPalPayment: PaymentStrategyFunc = (amount) => {
  console.log(`Processing PayPal payment of $${amount}`);
};

const CryptoPayment: PaymentStrategyFunc = (amount) => {
  console.log(`Processing crypto payment of $${amount}`);
};

const processOrderFunc = (strategy: PaymentStrategyFunc, amount: number) => {
  console.log('Processing order:');
  strategy(amount);
};

processOrderFunc(CreditCardPayment, 100);
processOrderFunc(PayPalPayment, 250);
