/*
* BAD
*
* В данном случае класс BadPlayer жестко зависит от реализации BadConsoleLogger
* В случае когда нам придется к примеру сменить класс BadConsoleLogger
* На что то другое, у нас не будет абстракции от которой мы могли бы зависеть
* А значит, рефакторинг кода может закончится очень плохой и долгой историей
* */

class BadConsoleLogger implements ILogger {
    public log(value: string) {
        console.log(value)
    }
}

class BadPlayer {
    private readonly logger = new BadConsoleLogger();

    constructor() {
    }

    public fly(): void {
        this.logger.log("Player is flying");
    }
}

const badPlayer = new BadPlayer();
badPlayer.fly() // => Player is flying

/*
* GOOD
*
* Данный пример ярко отражает всю крутость имения интерфейсов, так как
* Теперь у нас есть абстракция ввиде ILogger, с помощью которой можно воссоздавать
* Другие имплементации ILogger без нарушуения общей логики кода
* */

interface ILogger {
    log(value: string): void;
}

class ConsoleLogger implements ILogger {
    public log(value: string) {
        console.log(value)
    }
}

class Player {
    constructor(private readonly logger: ILogger) {
    }

    public fly(): void {
        this.logger.log("Player is flying");
    }
}

/// example

const consoleLogger = new ConsoleLogger();
const firstPlayer = new Player(consoleLogger);

firstPlayer.fly() // => Player is flying