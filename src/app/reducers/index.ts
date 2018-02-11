import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromStage from './stage';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  stage: fromStage.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
