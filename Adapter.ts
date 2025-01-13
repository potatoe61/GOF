// По примерам было сложно сообразить что то для моего ТЗ, представил, что используем сторонние сайты предсказателей.
// Интерфейс для прогнозов
interface PredictionService {
  getPrediction(teamA: string, teamB: string): string;
}

// Реализация стороннего сервиса прогнозирования
class ThirdPartyPredictionService {
  forecastMatch(homeTeam: string, awayTeam: string): string {
    return `Прогноз на матч: ${homeTeam} против ${awayTeam}`;
  }
}

// Адаптер для стороннего сервиса прогнозирования
class ThirdPartyPredictionAdapter implements PredictionService {
  private thirdPartyService: ThirdPartyPredictionService;

  constructor() {
    this.thirdPartyService = new ThirdPartyPredictionService();
  }

  getPrediction(teamA: string, teamB: string): string {
    return this.thirdPartyService.forecastMatch(teamA, teamB);
  }
}

// Пример использования
const predictionService: PredictionService = new ThirdPartyPredictionAdapter();
console.log(predictionService.getPrediction("Команда A", "Команда B")); // Выводим прогноз на матч
