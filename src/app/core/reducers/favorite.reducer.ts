import * as FavoriteActions from '../actions/favorites.actions'
import { Weather } from '../models/weather.model';


export function reducer(state: Weather[] = [], action: FavoriteActions.Actions) {
  let index;
    switch(action.type) {
        case FavoriteActions.ADD_FAVORITE:
            return [...state, action.payload];
        case FavoriteActions.REMOVE_FAVORITE:
            let newState = [...state];
            index = newState.findIndex( x => x.ID == action.payload)
            if(index >= 0)
              newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
}
