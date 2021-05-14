import { UserSummary } from "../user/user-summary";

/**
 * Model of an exhibit
 */
export class ExhibitModel{
    /**
     * Exhibit entity id
     */
    Id: string;

    /**
     * 
     */
    User: UserSummary;

    /**
     * Buffer encoding the exhibit's image file
     */
    File: Buffer;

    /**
     * The exhibit's human-readable name
     */
    Name: string;

    /**
     * Date of the exhibit's upload
     */
    UploadDate: Date;

    /**
     * The exhibit's number of likes
     */
    Likes: number;
}