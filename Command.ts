// Интерфейс команды
interface Command {
  execute(): void;
  undo(): void;
}

// Получатель
class Prediction {
  status: string = "Прогноз создан";

  setStatus(status: string): void {
    this.status = status;
    console.log(`Статус прогноза: ${this.status}`);
  }
}

// Команды
class CreatePredictionCommand implements Command {
  constructor(private prediction: Prediction) {}

  execute(): void {
    this.prediction.setStatus("Прогноз обработан");
  }

  undo(): void {
    this.prediction.setStatus("Прогноз создан");
  }
}

class ConfirmResultCommand implements Command {
  constructor(private prediction: Prediction) {}

  execute(): void {
    this.prediction.setStatus("Результат подтвержден");
  }

  undo(): void {
    this.prediction.setStatus("Прогноз обработан");
  }
}

// Инициатор
class PredictionManager {
  private commands: Command[] = [];

  executeCommand(command: Command): void {
    this.commands.push(command);
    command.execute();
  }

  undoCommand(): void {
    const command = this.commands.pop();
    if (command) {
      command.undo();
    }
  }
}

// Пример использования
const prediction = new Prediction();
const manager = new PredictionManager();

const createCommand = new CreatePredictionCommand(prediction);
const confirmCommand = new ConfirmResultCommand(prediction);

manager.executeCommand(createCommand); // Прогноз обработан
manager.executeCommand(confirmCommand); // Результат подтвержден
manager.undoCommand(); // Статус прогноза: Прогноз обработан