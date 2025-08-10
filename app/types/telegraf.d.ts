declare module 'telegraf' {
    export class Telegraf {
        constructor(token: string);
        launch(config?: any): Promise<void>;
        on(event: any, handler: any): void;
        command(command: string, handler: any): void;
        start(handler: any): void;
        catch(handler: any): void;
        telegram: any;
        secretPathComponent(): string;
    }
    export class Context {
        message?: any;
        update?: any;
        from?: any;
        chat?: any;
        callbackQuery?: any;
        reply(message: string, extra?: any): Promise<any>;
        replyWithPhoto(photo: string, extra?: any): Promise<any>;
        telegram: any;
        answerCbQuery(text?: string, options?: any): Promise<any>;
        editMessageMedia(media: any, extra?: any): Promise<any>;
        getChatMember(userId: number): Promise<any>;
        leaveChat(): Promise<any>;
        updateType: string;
    }
    export namespace Telegraf {
        export namespace Filters {
            export function callbackQuery(data: string): any;
            export function message(type: string): any;
        }
    }
}