import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessageService {
    messages: Array<Message>;

    constructor() {
        this.messages = [];
    }

    /**
     * Displays a success message with given title and content
     * @param title The message's title
     * @param content The message's optional content
     */
	showSuccessMessage(title: string, content?: string) {
        const message: Message = {
            type: "success",
            title,
            content,
        };

        this.removeMessageAfterDelay(message, 5000);

        this.messages.push(message);
    }

    /**
     * Displays an error message with given title and content.
     * @param title Title of the error message
     * @param error Either a string describing the error or an error object.
     */
    showErrorMessage(title: string, error: string | Error) {
        let content = (error instanceof Error) ? error.message : error;

        const message: Message = {
            type: "error",
            title,
            content
        };

        this.removeMessageAfterDelay(message, 5000);

        this.messages.push(message);
    }

    private removeMessageAfterDelay(message: Message, delay: number){
        setTimeout(() => {
            this.messages.splice(this.messages.indexOf(message), 1);
        }, delay);
    }
}