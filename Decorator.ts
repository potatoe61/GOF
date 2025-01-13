// Интерфейс прогноза
interface Prediction {
  getDescription(): string;
  getCost(): number;
}

// Базовый прогноз
class BasicPrediction implements Prediction {
  getDescription(): string {
    return "Базовый прогноз на матч";
  }

  getCost(): number {
    return 1337;
  }
}

// Декоратор
class PredictionDecorator implements Prediction {
  protected prediction: Prediction;

  constructor(prediction: Prediction) {
    this.prediction = prediction;
  }

  getDescription(): string {
    return this.prediction.getDescription();
  }

  getCost(): number {
    return this.prediction.getCost();
  }
}

// Дополнительные опции
class DataAnalysis extends PredictionDecorator {
  getDescription(): string {
    return this.prediction.getDescription() + ", с анализом данных";
  }

  getCost(): number {
    return this.prediction.getCost() + 50;
  }
}

class ExpertAdvice extends PredictionDecorator {
  getDescription(): string {
    return this.prediction.getDescription() + ", с советами экспертов";
  }

  getCost(): number {
    return this.prediction.getCost() + 40;
  }
}

// Пример использования
let prediction: Prediction = new BasicPrediction();

console.log(prediction.getDescription()); // Базовый прогноз на матч
console.log(prediction.getCost());

prediction = new DataAnalysis(prediction);
console.log(prediction.getDescription()); // Базовый прогноз на матч, с анализом данных
console.log(prediction.getCost());

prediction = new ExpertAdvice(prediction);
console.log(prediction.getDescription()); // Базовый прогноз на матч, с анализом данных, с советами экспертов
console.log(prediction.getCost());
