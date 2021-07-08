import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Weather } from '../models/weather.model';



export const ADD_FAVORITE       = 'Add';
export const REMOVE_FAVORITE    = 'Remove';

export class AddFavorite implements Action{
  readonly type = ADD_FAVORITE;

  constructor(public payload: Weather){}
}

export class RemoveFavorite implements Action {
  readonly type = REMOVE_FAVORITE;

  constructor(public payload: string){}

}



export type Actions = AddFavorite | RemoveFavorite;
