interface INews {
    title: string;
    content: string;
    modified: boolean;

    update(title: string): void;
}

class News implements INews {
    public title: string;
    public content: string;
    public modified: boolean = false;

    public constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    public update(title: string): void {
        this.title = title;
        this.modified = true;
    }

    // /*
    //  * В данном случае метод toHTML нарушает принцип SRP
    //  * */
    // public toHTML(): string {
    //     return `
    //         <h1>${this.title}</h1>
    //         <p>${this.content}</p>
    //     `
    // }
    //
    // /*
    //  * В данном случае метод toJSON нарушает принцип SRP
    //  * */
    // public toJSON(): string {
    //     const {title, content} = this;
    //
    //     return JSON.stringify({
    //         title,
    //         content
    //     });
    // }
}

/*
* Путем создания отдельного класса для работы с выводом информации мы раздилли логику
* Работы с новотью и с её выводом, тем мсамым соблюли принцип SRP
* */
class NewsPrinter {
    private readonly news: INews;

    public constructor(news: INews) {
        this.news = news;
    }

    public toHTML(): string {
        const {title, content} = this.news;

        return `
            <h1>${title}</h1>
            <p>${content}</p>
        `
    }

    public toJSON() {
        const {title, content} = this.news;

        return JSON.stringify({
            title,
            content
        });
    }
}

const news = new News("My title", "Content news....");
console.log(news)