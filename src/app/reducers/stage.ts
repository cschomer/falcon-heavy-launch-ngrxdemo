import { StageActionTypes, StageActions } from '../actions/stage';
import { initialState } from './state';
export interface State {}

export function reducer(state = initialState, action: StageActions): State {
  switch (action.type) {
    case StageActionTypes.Startup: {
      return {
        ...state,
        stage: 'Startup'
      };
    }

    case StageActionTypes.Liftoff: {
      return {
        ...state,
        stage: 'Liftoff'
      };
    }

    case StageActionTypes.MaxQ: {
      return {
        ...state,
        stage: 'MaxQ'
      };
    }

    case StageActionTypes.BoostersEngineCutOff: {
      return {
        ...state,
        stage: 'BoostersEngineCutOff'
      };
    }

    case StageActionTypes.MainEngineCutOff: {
      return {
        ...state,
        stage: 'MainEngineCutOff'
      };
    }

    case StageActionTypes.FairingDeploy: {
      return {
        ...state,
        stage: 'FairingDeploy'
      };
    }

    case StageActionTypes.BoostersLand: {
      return {
        ...state,
        stage: 'BoostersLand'
      };
    }

    case StageActionTypes.Stage2ShutDown: {
      return {
        ...state,
        stage: 'Stage2ShutDown'
      };
    }

    case StageActionTypes.CoreLands: {
      return {
        ...state,
        stage: 'CoreLands'
      };
    }

    default: {
      return state;
    }
  }
}
