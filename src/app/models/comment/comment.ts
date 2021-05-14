import { UserSummary } from "../user/user-summary";

/**
 * Model of a comment
 */
export class CommentModel{
    /**
     * Comment entity id
     */
    Id: number;

    /**
     * Usersummary of the comment's author
     */
    User: UserSummary;

    /**
     * Id of the referred exhibit
     */
    ExhibitId: number;

    /**
     * Title of the comment
     */
    Title: string;

    /**
     * Content of the comment
     */
    Content: string;

    /**
     * The comment's amount of likes
     */
    Likes: number;
}