import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../../actions/favorites.actions';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(title, degrees, desc) {
    //this.store.dispatch(new TutorialActions.AddFavorite({title: title, degrees: degrees, description: desc}) );
  }

  ngOnInit(): void {
  }

}
