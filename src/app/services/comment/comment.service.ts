import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../../models/comment/comment';
import { Observable } from 'rxjs';

/**
 * Provides an interface to the API for comment related business.
 */
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  readonly rootUrl = '/api/comment';

  constructor(
    private httpClient: HttpClient,
  ) { }

   /**
   * Gets all comments of the specified exhibit.
   * @param id Id of the exhibit in question
   * @returns Array of comment models
   */
  getForExhibit(id: number): Observable<CommentModel[]>{
    const requestUrl = `${this.rootUrl}/exhibit/${id}`;

    return this.httpClient.get<CommentModel[]>(requestUrl);
  }

  /**
   * Creates a comment in the database
   * @param comment Model of the comment to create
   * @returns Created comment model, with id
   */
  create(comment: CommentModel): Observable<CommentModel>{
    const requestUrl = `${this.rootUrl}`;

    return this.httpClient.post<CommentModel>(requestUrl, comment);
  }

  /**
   * Updates an existing comment to the provided values
   * @param comment Comment with updated values
   * @returns Updated comment
   */
  update(comment: CommentModel): Observable<CommentModel>{
    const requestUrl = `${this.rootUrl}`;

    return this.httpClient.put<CommentModel>(requestUrl, comment);
  }

  /**
   * Deletes the comment with the specified id
   * @param id Id of the comment to delete
   */
  delete(id: string){
    const requestUrl = `${this.rootUrl}/${id}`;

    return this.httpClient.delete(requestUrl);
  }

  /**
   * Likes, respectively unlikes a comment
   * @param id Id of the comment to like
   * @returns Confirmation string
   */
  like(id: string): Observable<string>{
    const requestUrl = `${this.rootUrl}/like/${id}`;

    return this.httpClient.get<string>(requestUrl);
  }

}
