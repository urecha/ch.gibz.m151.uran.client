import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExhibitModel } from '../../models/exhibit/exhibit';

/**
 * Provides an interface to the API for exhibit related business.
 */
@Injectable({
  providedIn: 'root'
})
export class ExhibitService {
  readonly rootUrl = '/api/exhibit';

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Gets all stored exhibits
   * @returns Array of exhibitmodels
   */
  getAll(): Observable<ExhibitModel[]>{
    const requestUrl = `${this.rootUrl}`

    return this.httpClient.get<ExhibitModel[]>(requestUrl);
  }

  /**
   * Gets all exhibits of the specified user.
   * @param userId Id of the user in question
   * @returns Array of exhibit models
   */
  getForUser(userId: number): Observable<ExhibitModel[]>{
    const requestUrl = `${this.rootUrl}/user/${userId}`;

    return this.httpClient.get<ExhibitModel[]>(requestUrl);
  }

  /**
   * Creates an exhibit in the database
   * @param exhibit Model of the exhibit to create
   * @returns Created exhibit model, with id
   */
  create(exhibit: ExhibitModel): Observable<ExhibitModel>{
    const requestUrl = `${this.rootUrl}`;

    return this.httpClient.post<ExhibitModel>(requestUrl, exhibit);
  }

  /**
   * Updates an existing exhibit to the provided values
   * @param exhibit Exhibit with updated values
   * @returns Updated exhibit
   */
  update(exhibit: ExhibitModel): Observable<ExhibitModel>{
    const requestUrl = `${this.rootUrl}`;

    return this.httpClient.put<ExhibitModel>(requestUrl, exhibit);
  }

  /**
   * Deletes the exhibit with the specified id
   * @param id Id of the exhibit to delete
   */
  delete(id: string){
    const requestUrl = `${this.rootUrl}/${id}`;

    return this.httpClient.delete(requestUrl);
  }

  /**
   * Likes, respectively unlikes an exhibit
   * @param id Id of the exhibit to like
   * @returns Confirmation string
   */
  like(id: number): Observable<string>{
    const requestUrl = `${this.rootUrl}/like/${id}`;

    return this.httpClient.get<string>(requestUrl);
  }
}
