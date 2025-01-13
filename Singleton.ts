class SingletonMeta {
  private static instances: { [key: string]: any } = {};

  public static getInstance<T>(cls: { new (): T }): T {
    if (!this.instances[cls.name]) {
      this.instances[cls.name] = new cls();
    }
    return this.instances[cls.name];
  }
}

class Log {
  private logFile: string;

  private constructor() {
    this.logFile = "log.txt";
  }

  public static getInstance(): Log {
    return SingletonMeta.getInstance(Log);
  }

  public logExecution(message: string): void {
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;
    require("fs").appendFileSync(this.logFile, logMessage); // Используется для записи в файл
  }
}

class PredictionOperation {
  public static run(prediction: string, odds: number, currentValue: number = 0): number {
    const log = Log.getInstance();
    const result = currentValue * odds;
    log.logExecution(`Прогноз: ${prediction}. Коэффициенты: ${odds}. Результат: ${result}`);
    return result;
  }
}

// Пример использования
const log = Log.getInstance();
log.logExecution("Запуск программы");

let result = PredictionOperation.run("Победа команды A", 1.5);
console.log(`Результат: ${result}`);

result = PredictionOperation.run("Ничья", 2.0, result);
console.log(`Результат: ${result}`);

result = PredictionOperation.run("Победа команды B", 2.5, result);
console.log(`Результат: ${result}`);