// Подсистемы
class PredictionService {
  createPrediction(): string {
    return "Прогноз создан.";
  }
}

class NotificationService {
  sendNotification(): string {
    return "Уведомление отправлено.";
  }
}

class ReportService {
  generateReport(): string {
    return "Отчет с прогнозом сгенерирован.";
  }
}

// Фасад
class PredictionFacade {
  private predictionService: PredictionService;
  private notificationService: NotificationService;
  private reportService: ReportService;

  constructor() {
    this.predictionService = new PredictionService();
    this.notificationService = new NotificationService();
    this.reportService = new ReportService();
  }

  processPrediction(): string {
    let result = "";
    result += this.predictionService.createPrediction() + " ";
    result += this.notificationService.sendNotification() + " ";
    result += this.reportService.generateReport();
    return result;
  }
}

// Пример использования
const facade = new PredictionFacade();
console.log(facade.processPrediction()); // Прогноз создан. Уведомление отправлено. Отчет с прогнозом сгенерирован.
