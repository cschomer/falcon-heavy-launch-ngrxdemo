import { StageActionTypes, StageActions } from '../actions/stage';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false
};

export function reducer(state = initialState, action: StageActions): State {
  switch (action.type) {
    case StageActionTypes.Startup: {
      return {
        ...state,
        error: null,
        pending: true
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
