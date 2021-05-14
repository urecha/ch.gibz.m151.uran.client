/**
 * Represents an application message
 */
export class Message{
    /**
     * The message's type; either error or success
     */
    type: "error" | "success";

    /**
     * The message's title
     */
    title: string;

    /**
     * The message's optional content
     */
    content?: string;
}