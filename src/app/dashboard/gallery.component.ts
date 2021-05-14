import { Component, OnInit } from '@angular/core';
import { ExhibitModel } from '../models/exhibit/exhibit';
import { ExhibitService } from '../services/exhibit/exhibit.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  userName: string;

  //lazy loading would be neat, if there's more than have space on the monitor
  exhibits: ExhibitModel[];

  constructor(
    private exhibitService: ExhibitService,
  ) { }

  ngOnInit(): void {
    this.exhibitService.getAll().toPromise()
      .then(exhibits => this.exhibits = exhibits);
  }

  like(exhibitId: number){
    this.exhibitService.like(exhibitId).toPromise()
      .then(res => {
        console.log(res);
      })
  }

  /**
   * Checks, whether the given exhibit has been liked by this user or not
   * @param exhibitId Id of the exhibit in question
   * @returns True if the user liked the exhibit, false otherwise
   */
  likedByUser(exhibitId: number){
    return false;
  }
}
