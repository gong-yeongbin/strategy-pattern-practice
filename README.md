# 전략 패턴 (Strategy Pattern)

전략 패턴은 알고리즘을 별도의 클래스로 분리하여, 런타임에 동적으로 행위를 선택하거나 교체할 수 있도록 해주는 디자인 패턴입니다.

## 개념

- 알고리즘을 별도로 분리하여, 런타임에 동적으로 행위를 선택, 교체할 수 있습니다.
- 예시: 시스템 결제 방식을 현금에서 카드 등으로 쉽게 변경 가능

## 구조
- Context: 전략을 사용하는 객체
- Stratgy: 행위를 정의하는 인터페이스 or 추상클래스
- ConceteStratge: 전략을 구현하는 구체적인 클래스

## 장점

- 런타임에 알고리즘을 자유롭게 변경 가능
- 기존 코드 수정 없이 새로운 전략(알고리즘)을 추가하고 시스템 확장 가능
- 중복 코드 감소
- 전략 객체별 재사용성 높음

## 단점

- 전략 개수만큼 클래스가 많아져 관리 복잡성 증가
- 코드 구조가 복잡해질 수 있음
- 클라이언트가 직접 전략을 결정해 적용해야 함


### Strategy
```
interface PaymentStrategy {
  processPayment(amount: any): void;
}
```

### ConceteStratge
```
class CreditCardPaymentStrategy implements PaymentStrategy {
  processPayment(amount: any): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}
```

### Context
```
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
```

