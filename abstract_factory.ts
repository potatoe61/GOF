interface PredictionButton {
  render(): void;
}

interface ResultsWindow {
  render(): void;
}

// Имплементация для мобилок

class MobilePredictionButton implements PredictionButton {
  render(): void {
    console.log("Rendering mobile prediction button");
  }
}

class MobileResultsWindow implements ResultsWindow {
  render(): void {
    console.log("Rendering mobile results window");
  }
}

// Веб имплементация

class WebPredictionButton implements PredictionButton {
  render(): void {
    console.log("Rendering web prediction button");
  }
}

class WebResultsWindow implements ResultsWindow {
  render(): void {
    console.log("Rendering web results window");
  }
}

// Абстрактная фабрика

interface PredictionFactory {
  createButton(): PredictionButton;
  createWindow(): ResultsWindow;
}

// Фабрики для разных платформ

class MobilePredictionFactory implements PredictionFactory {
  createButton(): PredictionButton {
    return new MobilePredictionButton();
  }

  createWindow(): ResultsWindow {
    return new MobileResultsWindow();
  }
}

class WebPredictionFactory implements PredictionFactory {
  createButton(): PredictionButton {
    return new WebPredictionButton();
  }

  createWindow(): ResultsWindow {
    return new WebResultsWindow();
  }
}

// Примеры использования

function createPredictionUI(factory: PredictionFactory): void {
  const button = factory.createButton();
  const window = factory.createWindow();

  button.render();
  window.render();
}

const mobilePredictionFactory = new MobilePredictionFactory();
createPredictionUI(mobilePredictionFactory);

const webPredictionFactory = new WebPredictionFactory();
createPredictionUI(webPredictionFactory);