// Абстрактный класс с шаблонным методом
abstract class PredictionProcessor {
  processPrediction(): void {
    this.gatherData();
    this.analyzeData();
    this.sendNotification();
    this.finalizePrediction();
  }

  // Шаги алгоритма
  protected abstract gatherData(): void;
  protected abstract analyzeData(): void;

  protected sendNotification(): void {
    console.log("Уведомление отправлено заинтересованным сторонам.");
  }

  protected finalizePrediction(): void {
    console.log("Прогноз завершен успешно.");
  }
}

// Класс для простого прогноза
class SimplePrediction extends PredictionProcessor {
  protected gatherData(): void {
    console.log("Собраны данные для простого прогноза.");
  }

  protected analyzeData(): void {
    console.log("Данные проанализированы для простого прогноза.");
  }
}

// Класс для прогноза с использованием статистики
class StatisticalPrediction extends PredictionProcessor {
  protected gatherData(): void {
    console.log("Собраны статистические данные для прогноза.");
  }

  protected analyzeData(): void {
    console.log("Статистические данные проанализированы для прогноза.");
  }
}

// Пример использования
const simplePrediction = new SimplePrediction();
simplePrediction.processPrediction();

const statisticalPrediction = new StatisticalPrediction();
statisticalPrediction.processPrediction();