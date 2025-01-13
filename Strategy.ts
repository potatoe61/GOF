// Интерфейс стратегии
interface PredictionStrategy {
  predictOutcome(matchData: any): string;
}

// Реализация стратегий

class SimplePredictionStrategy implements PredictionStrategy {
  predictOutcome(matchData: any): string {
    // Простое прогнозирование на основе рандома
    return Math.random() > 0.5 ? "Победа команды A" : "Победа команды B";
  }
}

class StatisticalPredictionStrategy implements PredictionStrategy {
  predictOutcome(matchData: any): string {
    // Прогнозирование на основе статистики
    return matchData.teamA.winRate > matchData.teamB.winRate ? "Победа команды A" : "Победа команды B";
  }
}

class ExpertPredictionStrategy implements PredictionStrategy {
  predictOutcome(matchData: any): string {
    // Прогнозирование на основе мнения экспертов
    return "По мнению экспертов, побеждает команда A";
  }
}

// Контекст
class PredictionContext {
  private strategy: PredictionStrategy;

  constructor(strategy: PredictionStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PredictionStrategy): void {
    this.strategy = strategy;
  }

  predict(matchData: any): string {
    return this.strategy.predictOutcome(matchData);
  }
}

// Пример использования
const matchData = { teamA: { winRate: 0.7 }, teamB: { winRate: 0.5 } };

const context = new PredictionContext(new SimplePredictionStrategy());
console.log(context.predict(matchData)); // Простой прогноз

context.setStrategy(new StatisticalPredictionStrategy());
console.log(context.predict(matchData)); // Прогноз на основе статистики

context.setStrategy(new ExpertPredictionStrategy());
console.log(context.predict(matchData)); // Прогноз на основе мнения экспертов