import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/tutorial.model';
import * as TutorialActions from '../../actions/favorites.actions';
import { AppState } from 'src/app/app.state';
import { Weather } from '../../models/weather.model';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {


  favorites: Observable<Weather[]>;


  constructor(private store: Store<AppState>) {
    this.favorites = store.select('favorites');
   }

  ngOnInit(): void {
  }

  removeItem(id:string){
    this.store.dispatch(new TutorialActions.RemoveFavorite(id));
  }

}
