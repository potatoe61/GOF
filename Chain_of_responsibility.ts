// Интерфейс обработчика
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Базовый обработчик
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

// Конкретные обработчики

class AvailabilityHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "available") {
      return "Матч доступен для обработки.";
    }
    return super.handle(request);
  }
}

class OddsHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "odds") {
      return "Коэффициенты рассчитаны.";
    }
    return super.handle(request);
  }
}

class ResultConfirmationHandler extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "confirm") {
      return "Результат матча подтвержден.";
    }
    return super.handle(request);
  }
}

// Пример использования
const availability = new AvailabilityHandler();
const odds = new OddsHandler();
const resultConfirmation = new ResultConfirmationHandler();

availability.setNext(odds).setNext(resultConfirmation);

console.log(availability.handle("available")); // Матч доступен для обработки.
console.log(availability.handle("odds")); // Коэффициенты рассчитаны.
console.log(availability.handle("confirm")); // Результат матча подтвержден.